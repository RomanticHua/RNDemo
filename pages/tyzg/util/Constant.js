/**
 *
 * 全局常量
 */
const Constant = {
    ACTIVE_OPACITY: 0.6, //按钮的点击效果
    MAIN_COLOR: '#1C86EE',
    LOGIN: {
        TOKEN: 'token',//token存储的key
    },
    FLAG_LANGUAGE: {
        POPULAR: 'popular',
        TRENDING: 'trending',
    },
    TRENDING_CATEGORY: [
        {key: 'daily', value: '今天'},
        {key: 'weekly', value: '本周'},
        {key: 'monthly', value: '本月'}
    ],
    TITLE_HEIGHT:50,//标题高度
    ICON_WIDTH:50,//标题高度
    DATA_CACHE_VALID_TIME: 6 * 60 * 60 * 1000,//数据缓存的有效时间 6个小时
};
export default Constant;