const {dirname, basename, extname, resolve, relative} = require('path');
const {stat} = require('fs').promises;

const task1 = async (par) => {
    const absolutePath = relative(__dirname, par);
    const isHaker = absolutePath[0] === '.';
    try {
        const isFile = (await stat(absolutePath)).isFile();
        const isFolder = (await stat(absolutePath)).isDirectory();
        if (isHaker) {
            console.log('Podano ', par, " Mnie się nie hakeruje, hakerczyku", "ODMOWA DOSTĘPU!!! BLOKADA NA GRY");
            console.log(' ');
        } else {
            console.log('Ścieżka z folderu głównego:', `./${absolutePath}`);
            console.log('Pełna ścieżka to:     ', resolve(__dirname, absolutePath));
            console.log('Katalog nadrzędny to: ', dirname(resolve(__dirname, absolutePath)));

            if (isFile) {
                console.log('Wskazana lokalizacja prowadzi do pliku');
                console.log('Nazwa pliku to:       ', basename(absolutePath));
                console.log('Rozszerzenie to:      ', extname(absolutePath));
            } else if (isFolder) {
                console.log('Wskazana lokalizacja prowadzi do folderu');
                console.log('Nazwa folderu to:     ', basename(absolutePath));
                console.log('Folder nie posiada rozszerzenia.');
            }
        }
    } catch (e) {
        const isFile = false;
        const isFolder = false;
        console.log('Ścieżka z folderu głównego:', `.\\${absolutePath}`);
        console.log('Pełna ścieżka to:     ', resolve(__dirname, absolutePath));
        console.log('Katalog nadrzędny to: ', dirname(resolve(__dirname, absolutePath)));
        console.log('Nie istnieje wskazana lokalizacja');
        console.log('Nazwa pliku/folderu to: ', basename(absolutePath));
        console.log('Rozszerzenie nieistniejącego pliku to: ', extname(absolutePath));
    }


    console.log(' ')
}

// task1(process.argv[2]);
// task1('C:\\Users\\Profesjonalista\\Desktop\\nauka-programowania\\MegaK');
// task1('./data');
// task1('C:\\Users\\Profesjonalista\\Desktop\\nauka-programowania\\MegaK\\week4\\MegaK-shop-tests\\index.js');
// task1('C:\\Users\\Profesjonalista\\Desktop\\nauka-programowania\\MegaK\\week4\\MegaK-shop-tests\\data\\sum.txt');
task1('C:\\Users\\Profesjonalista\\Desktop\\nauka-programowania\\MegaK\\week4\\MegaK-shop-tests\\data\\suma.txt');
// task1('../../aaa');