/**
 * @flie 对于状态的检测方法。
 * 冗余检测，不运行脚本依然可以正常运行。
 */


/**
 * 判断当前是否为进入系统的起点。
 * @returns {boolean}
 */
const check_begin_url = () => {
    // 以下 URL 为进入系统的起始。
    const target_url = "http://xlcp.fudan.edu.cn/#/home?isIn=0"
    if (window.location.href === target_url) {
        console.log("Enter system.")
        return true
    } else {
        console.log("Wrong URL.")
        return false
    }
}


/**
 * 检查剩余未做测试的数量。
 * @returns {NodeListOf<Element>}
 */
const check_test_count = () => {
    const test_count = document.querySelectorAll("span.count")[0].innerText
    console.log(`Remain test: ${test_count}`)
    return test_count
}


/**
 * 检查未做题目的数量。
 * @returns {NodeListOf<Element>}
 */
const check_evaluation_count = () => {
    const evaluation_count = document.querySelectorAll("div.evaluation-start")
    console.log(`Remain evaluation: ${evaluation_count}`)
    return evaluation_count
}

