let resultFor = require("./hack_1_for");
let resultWhile = require("./hack_1_while");


describe("===== HACK-1 =====",()=>{
  it("Validar for",()=>{
    expect(resultFor).toEqual([{a:1},{b:2},{c:3},{d:4},{e:5}]);
  });

  it("Validar while",()=>{
    expect(resultWhile).toEqual([{a:1},{b:2},{c:3},{d:4},{e:5}]);
  });
});

