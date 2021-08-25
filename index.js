//task s2w2d3t12
const {watch} = require('chokidar');
const {relative, resolve, join} = require("path");
const {readFile} = require('fs').promises;

const userPathToWatch = process.argv[2];

const checkIsPathValid = newFile => {
    const relativePath = relative(__dirname, newFile);
    // console.log(newFile, relativePath);
    if (newFile.includes('~')) {
        return console.log('zawiera ~ Nie wychodzimy z katalogu głównego')
    } else if (relativePath.includes('..')) {
        return console.log('nie można wyjśc z katalogu głównego')
    } else {
        const pathToWatch = join(relativePath, '/**/*.js')
        watch(pathToWatch, {ignoreInitial: true, awaitWriteFinish: true}).on('all', async (event, path) => {
            console.log(event, path)
            const fileContent = await readFile(path, 'utf8');
            console.log(fileContent)
        });
    }

}

checkIsPathValid(userPathToWatch)
// const pathToWatch = './data/**/*.js'