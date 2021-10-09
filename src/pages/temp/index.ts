function format(params: string) {
  console.log(params); // www.baidu.com，当需要追加自定义参数时可以这么写，也称作装饰器工厂
  return function (target: any, propertyKey: string) {
    console.log(target); // {constructor: ƒ}
    console.log(propertyKey); // greeting
  };
}

class Greeter {
  @format('www.baidu.com')
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }
}
const a = new Greeter('123');

console.log(a);
