module.exports = {
	preset: "ts-jest",
	collectCoverage: true, // 开启覆盖率收集
	collectCoverageFrom: [
		"src/**/*.{js,ts,tsx}", // 指定需要收集覆盖率的文件
		"!src/**/*.test.{js,ts,tsx}", // 排除测试文件
		"!src/scripts/**/*", // 排除测试文件
		"!src/data/**/*", // 排除测试文件
		"!src/**/index.ts", // 排除测试文件
	],
	coverageDirectory: "coverage", // 设置覆盖率报告保存的目录
	coverageThreshold: {
		global: {
			branches: 80, // 设置全局代码覆盖率门槛
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
  coverageReporters: ['text', 'lcov', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/']
};
