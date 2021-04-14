# 按周创建指定年份的周报

<!-- 执行方式 `npx --registry=https://registry.npmjs.org/ generate_week_report --report_at 5` -->

执行方式 `npx generate_week_report --report_at 5`

执行完毕后, 会在当前目录下, 创建当年的周报列表

执行结果示例 =>

```log
创建2021年的周报列表. 每周提交周报时间为: 周3
创建周报文件: F:\www\test\123\工作报告2021\01月\06-12.md
创建周报文件: F:\www\test\123\工作报告2021\01月\13-19.md
创建周报文件: F:\www\test\123\工作报告2021\01月\20-26.md
创建周报文件: F:\www\test\123\工作报告2021\01月\27-02.md
```

# 参数说明

--year 指定创建年份, 默认当年

--report_at 指定每周周报开始日期(1~7), 默认为 5 (周五)
