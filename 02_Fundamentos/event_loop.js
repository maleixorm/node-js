function a() {
    console.log("Executando a()")
}

function b() {
    console.log("Executbndo b()")
}

function c() {
    console.log("Executando c()")
    a()
    b()
}

c()