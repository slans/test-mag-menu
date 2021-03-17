import { MAIN_MENU } from './constants';

class StorageIterator {
	setMenuData(data: any) {
		localStorage.setItem(MAIN_MENU, JSON.stringify(data));
	}
	getMenuData() {
		const data: any = localStorage.getItem(MAIN_MENU);
		return JSON.parse(data);
	}
	removeMenuData() {
		localStorage.removeItem(MAIN_MENU);
	}
}

const storageIterator = new StorageIterator();

export { storageIterator };
