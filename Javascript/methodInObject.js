function test1(var1, var2, var3) {
    this.var1 = var1;
    this.var2 = var2;
    this.var3 = var3;
    this.clean = function (){
        alert("cleaning in progress........");
    }
}

var sub = new test1(1,2,3,);
console.log(sub);
sub.clean();