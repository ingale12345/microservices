module.exports = {
    displayName: "user-management-backend",
    preset: "../../jest.preset.js",
    testEnvironment: "node",
    transform: {
      "^.+\\.[tj]s$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "js", "html"],
    coverageDirectory: "../../coverage/apps/user-management-backend"
  };
  