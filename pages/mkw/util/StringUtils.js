export default class StringUtils {
    /**
     * 去除前后端空格
     */
    static trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    /**
     * 格式化字符串
     */
    format(str, params) {
        if (!params) {
            return str;
        }

        if (typeof params === 'object') {
            for (let key in params) {
                str = str.replace(new RegExp('\\{' + key + '\\}', 'g'), params[key]);
            }
        } else if (Array.isArray(params)) {
            params.forEach((value, index) => {
                str = str.replace(new RegExp('\\{' + index + '\\}', 'g'), value);
            })
        }


        return str;
    }
}