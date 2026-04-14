/**
 * @file 通过选择器选择各种 button 的方法。
 */


/**
 * 起始界面，选择进入评测。
 * @returns {Element & Node}
 */
const select_enter_button = () => {
    return document.querySelectorAll("div.tab-item-btn")[0]
}


/**
 * 开始评测。
 * 点击进入评测之后，需要开始评测。
 * @returns {Element & Node}
 */
const select_evaluation_start_button = () => {
    return document.querySelectorAll("div.evaluation-start")[0]
}


/**
 * 同意知情同意书。
 * 开始正式评测之前，需要点击同意知情同意书。
 * @returns {Element & Node}
 */
const select_agree_item_button = () => {
    return document.querySelectorAll("div.agree.item-btn")[0]
}


/**
 * 进入具体的问题。
 * 0是《学生心理健康普查量表》，1是《积极心理品质质量表》。
 * 可以对 td.el-table_1_column_2 内容进行检查。
 * @param {number} evaluation_index
 * @returns {Element & Node}
 */
const select_specific_evaluation_start_button = (evaluation_index) => {
    return document.querySelectorAll("div.evaluation-start")[evaluation_index]
}


/**
 * 进入《学生心理健康普查量表》。
 * @returns {Element & Node}
 */
const select_evaluation_0_start_button = () => {
    return document.querySelectorAll("div.evaluation-start")[0]
}


/**
 * 进入《积极心理品质质量表》。
 * @returns {Element & Node}
 */
const select_evaluation_1_start_button = () => {
    return document.querySelectorAll("div.evaluation-start")[1]
}


/**
 * 指导语页面，点击同意，进入正式答题。
 * @returns {Element & Node}
 */
const select_instructions_agree_button = () => {
    return document.querySelectorAll("div.item-btn.agree")[0]
}


/**
 * 定位弹窗上的确认提交答案。
 * @returns {Element & Node}
 */
const select_confirm_submit_button = () => {
    return document.querySelectorAll("div.van-button__content")[1]
}



