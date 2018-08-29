class testSuites {
  constructor() {
    this.suites = {
      
      spec: ["./test/f1/*.feature"],

      exclude: ["./features/*.*"],
     
    };
  }
}

export default new testSuites();