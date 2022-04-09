/*
 * @version:  ;
 * @description:  ;
 * @autor: Full
 * @date: Do not edit
 */
import 'vant/lib/index.css'; //vant引入样式
import {
	Toast,
	Button,
	Tab,
	Tabs,
	Swipe,
	SwipeItem,
	NavBar,
	Form,
	Field,
	Icon,
	List,
	Loading,
	PullRefresh,
	Cell,
	CellGroup,
	Empty,
	NoticeBar,
	Dialog,
	Skeleton,
	Overlay,
	Popup,
	Divider,
	Picker,
	Calendar,
	Image,
} from 'vant';

export const steupVantPlugin = (app) => {
	app.use(Toast)
		.use(Button)
		.use(Tab)
		.use(Tabs)
		.use(Swipe)
		.use(SwipeItem)
		.use(NavBar)
		.use(Form)
		.use(Field)
		.use(Icon)
		.use(List)
		.use(Loading)
		.use(PullRefresh)
		.use(Cell)
		.use(CellGroup)
		.use(Empty)
		.use(NoticeBar)
		.use(Dialog)
		.use(Skeleton)
		.use(Overlay)
		.use(Popup)
		.use(Divider)
		.use(Picker)
		.use(Calendar)
		.use(Image);
};
