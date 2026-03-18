/**
 * 对于状态的检测方法。
 * 冗余检测，不运行脚本依然可以正常运行。
 */


const check_begin_url = () => {
    // 以下 URL 为进入系统的起始。
    target_url = "http://xlcp.fudan.edu.cn/#/home?isIn=0"
    if (window.location.href === target_url) {
        console.log("Enter system.")
        return true
    } else {
        console.log("Wrong URL.")
        return false
    }
}


const check_test_count = () => {

}

