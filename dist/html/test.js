function outerfunc() {
  let value = 1;
  function innerfunc () {
    console.log(++value);
  }
  return innerfunc;
}

let clousertest = (function () {
  let val1 = 1;
  let val2 = 2;
  return {
    f1: function () {
      
    },
    f2: function () {
      
    },
    init: function () {
      let that = this;
      document.querySelector(".test").addEventListener("click", function () {
        that.f1();
      });
    }
  }

});
clousertest.init();


console.log(document.cookie);
document.cookie = 'name=me';
document.cookie = 'sex=man';
console.log(document.cookie);