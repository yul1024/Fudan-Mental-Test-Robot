
// 通过 span 内容检查是否完成全部测试。
if (document.querySelectorAll("span.count")[0].innerText==="0") {
    console.log("Finished all tests.")
}

// 进入评测。
document.querySelectorAll("div.tab-item-btn")[0].click()


console.log(`${document.querySelectorAll("div.evaluation-start")} remain test to do.`)
// 开始评测。
document.querySelectorAll("div.evaluation-start")[0].click()


// 同意知情同意书。
document.querySelectorAll("div.agree.item-btn")[0].click()

// 进入答题。
// 0是《学生心理健康普查量表》，1是《积极心理品质质量表》。
// 可以对 td.el-table_1_column_2 内容进行检查。
document.querySelectorAll("div.evaluation-start")[0].click()


// 指导语页面，开始答题。
document.querySelectorAll("div.item-btn.agree")[0].click()


// 答题方法。
const answer_question = (option_index) => {
    // 选择选项。
    document.querySelectorAll("pre")[option_index].click()
    // 下一题。
    document.querySelectorAll("div.agree.btn")[0].click()
    // 提交按钮是隐形的，不可以点。
    // document.querySelectorAll("div.agree.btn")[1].click()
}

answer_1 = [
    // 1-5
    0, 0, 0, 0, 0,
    // 6-10
    0, 0, 0, 0, 0,
    // 11-15
    0, 0, 0, 0, 0,
    // 16-20
    0, 0, 0, 0, 0,
    // 21-25
    0, 0, 0, 0, 0,
    // 26-30
    0, 0, 0, 0, 0,
    // 31-35
    0, 0, 0, 0, 0,
    // 36-40
    0, 0, 0, 0, 0,
    // 41-45
    0, 0, 0, 0, 0,
    // 46-50
    0, 1, 1, 1, 1,
    // 51-55
    1, 1, 1, 1, 1,
    // 56-60
    1, 1, 1, 1, 1,
    // 61-65
    0, 0, 0, 1, 1,
    // 66-70
    1, 0, 1, 0, 1,
    // 71-75
    1, 0, 0, 0, 0,
    // 76-80
    4, 4, 4, 4, 4,
    // 81-85
    0, 0, 0, 0, 4,
    //86-90
    0, 0, 4, 0, 4,
    // 91-95
    4, 4, 4, 4, 4,
    // 96
    4,
]

// 发生弹窗，确认提交答案。
document.querySelectorAll("div.van-button__content")[1].click()
// 返回。
document.querySelectorAll("button.el-button.agree.btn.el-button--default")[0].click()

// 发生弹窗，继续作答。
document.querySelectorAll("div.van-button__content")[0].click()



// 开始作答第二份题目
document.querySelectorAll("div.item-btn.agree")[0].click()

// 这部分答案的 index 是从 1 开始的。
answer_2 = [
    // 1-5
    1, 1, 1, 1, 1,
    // 6-10
    1, 1, 1, 1, 1,
    // 11-15
    1, 1, 1, 1, 1,
    // 16-20
    1, 1, 1, 1, 1,
    // 21-25
    1, 1, 1, 1, 1,
    // 26-30
    1, 1, 1, 1, 1,
    // 31-35
    1, 1, 1, 1, 1,
    // 36-40
    1, 1, 1, 1, 1,
    // 41-45
    1, 1, 1, 1, 1,
    // 46-50
    1, 1, 1, 1, 1,
    // 51-55
    1, 1, 1, 1, 1,
    // 56-60
    1, 1, 1, 1, 1,
    // 61-62
    1, 1,
]

