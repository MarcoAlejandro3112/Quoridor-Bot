let Paredes = [5, 5, 5, 5]
let turno = 0
let nn = 81
let posiciones = [76,4,36,44]
let Grafo = new Array(nn)
let n = 9
let Meta_Jugador1 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let Meta_Jugador2 = [72,73,74,75,76,77,78,79,80]
let Meta_Jugador3 = [8,17,26,35,44,53,62,71,80]
let Meta_Jugador4 = [0,9,18,27,36,45,54,63,72]
let Distancias = []
let winner = false

function ponerPared(){
	a = document.getElementById("numPared1").value
	b = document.getElementById("numPared2").value
	dibujarPared(a,b);
	remove_edge(a,b);
}

/*ENUMERAR PAREDES*/
/*let count = 1
let bImpar = true;
for(i = 1;i<=208;i++){
	if (i == 35){
		console.log(bImpar + "COUNT: " + count)
	}
	if(bImpar){
		if(count <= 8){
			console.log(i)
			document.getElementById("pared-" + i).innerHTML+=i.toString()
			count++
		} else {
			bImpar = false
			document.getElementById("pared-" + i).innerHTML+=i.toString()
			count = 1
		}
	} else{
		if(count <= 8){
			document.getElementById("pared-" + (i+1)).innerHTML+=(i+1).toString()
			count++
			i++
		} else{
			count = 2
			document.getElementById("pared-" + i).innerHTML+=i.toString()
			bImpar = true
		}
	}
	
}*/

for(i = 0;i<80;i++){
	document.getElementById("celda-" + i).innerHTML+=i.toString()
}
class Stack{
    constructor(){
        this.data = []
        this.top = 0
    }
    push(element) {
      this.data[this.top] = element
      this.top = this.top + 1
    }
   length() {
      return this.top
   }
   peek() {
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0
   }
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1
       return this.data.pop()
     }
   }
   print() {
      var top = this.top - 1
      while(top >= 0) {
          console.log(this.data[top])
           top--
       }
    }
    reverse() {
       this._reverse(this.top - 1 )
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1)
       }
       console.log(this.data[index])
    }
}
for (let i = 0; i < nn; i++){
    Grafo[i] = new Array()
}
for (let v = 0; v < nn; v++){
    if (v >= n) {
        let u = v - n;
        Grafo[v].push(u);
        Grafo[u].push(v);
    }
    if (v % n != 0) {
        let u = v - 1;
        Grafo[v].push(u)
        Grafo[u].push(v)
    }
}

function dibujarPared(a,b){
	aux1 = a,aux2 = b
	a = Math.min(aux1,aux2)
	b = Math.max(aux1,aux2)
	/*PAREDES FILA 1*/
	if((a == 0 && b == 1) || (a == 1 && b == 0)){
		document.getElementById("pared-1").classList.add("active")
	}
	if((a == 1 && b == 2) || (a == 2 && b == 1)){
		document.getElementById("pared-2").classList.add("active")
	}
	if((a == 2 && b == 3) || (a == 3 && b == 2)){
		document.getElementById("pared-3").classList.add("active")
	}
	if((a == 3 && b == 4) || (a == 4 && b == 3)){
		document.getElementById("pared-4").classList.add("active")
	}
	if((a == 4 && b == 5) || (a == 5 && b == 4)){
		document.getElementById("pared-5").classList.add("active")
	}
	if((a == 5 && b == 6) || (a == 6 && b == 5)){
		document.getElementById("pared-6").classList.add("active")
	}
	if((a == 6 && b == 7) || (a == 7 && b == 6)){
		document.getElementById("pared-7").classList.add("active")
	}
	if((a == 7 && b == 8) || (a == 8 && b == 7)){
		document.getElementById("pared-8").classList.add("active")
	}

	/*PAREDES FILA 2*/
	if((a == 0 && b == 9) || (a == 9 && b == 0)){
		document.getElementById("pared-9").classList.add("active")
	}
	if((a == 1 && b == 10) || (a == 10 && b == 1)){
		document.getElementById("pared-11").classList.add("active")
	}
	if((a == 2 && b == 11) || (a == 11 && b == 2)){
		document.getElementById("pared-13").classList.add("active")
	}
	if((a == 3 && b == 12) || (a == 12 && b == 3)){
		document.getElementById("pared-15").classList.add("active")
	}
	if((a == 4 && b == 13) || (a == 13 && b == 4)){
		document.getElementById("pared-17").classList.add("active")
	}
	if((a == 5 && b == 14) || (a == 14 && b == 5)){
		document.getElementById("pared-19").classList.add("active")
	}
	if((a == 6 && b == 15) || (a == 15 && b == 6)){
		document.getElementById("pared-21").classList.add("active")
	}
	if((a == 7 && b == 16) || (a == 16 && b == 7)){
		document.getElementById("pared-23").classList.add("active")
	}
	if((a == 8 && b == 17) || (a == 17 && b == 8)){
		document.getElementById("pared-25").classList.add("active")
	}

    /*PAREDES FILA 3*/
	if((a == 9 && b == 10) || (a == 10 && b == 9)){
		document.getElementById("pared-26").classList.add("active")
	}
	if((a == 10 && b == 11) || (a == 11 && b == 10)){
		document.getElementById("pared-27").classList.add("active")
	}
	if((a == 11 && b == 12) || (a == 12 && b == 11)){
		document.getElementById("pared-28").classList.add("active")
	}
	if((a == 12 && b == 13) || (a == 13 && b == 12)){
		document.getElementById("pared-29").classList.add("active")
	}
	if((a == 13 && b == 14) || (a == 14 && b == 13)){
		document.getElementById("pared-30").classList.add("active")
	}
	if((a == 14 && b == 15) || (a == 15 && b == 14)){
		document.getElementById("pared-31").classList.add("active")
	}
	if((a == 15 && b == 16) || (a == 16 && b == 15)){
		document.getElementById("pared-32").classList.add("active")
	}
	if((a == 16 && b == 17) || (a == 17 && b == 16)){
		document.getElementById("pared-33").classList.add("active")
	}

	/*PAREDES FILA 4*/
	if((a == 9 && b == 18) || (a == 18 && b == 9)){
		document.getElementById("pared-34").classList.add("active")
	}
	if((a == 10 && b == 19) || (a == 19 && b == 10)){
		document.getElementById("pared-36").classList.add("active")
	}
	if((a == 11 && b == 20) || (a == 20 && b == 11)){
		document.getElementById("pared-38").classList.add("active")
	}
	if((a == 12 && b == 21) || (a == 21 && b == 12)){
		document.getElementById("pared-40").classList.add("active")
	}
	if((a == 13 && b == 22) || (a == 22 && b == 13)){
		document.getElementById("pared-42").classList.add("active")
	}
	if((a == 14 && b == 23) || (a == 23 && b == 14)){
		document.getElementById("pared-44").classList.add("active")
	}
	if((a == 15 && b == 24) || (a == 24 && b == 15)){
		document.getElementById("pared-46").classList.add("active")
	}
	if((a == 16 && b == 25) || (a == 25 && b == 16)){
		document.getElementById("pared-48").classList.add("active")
	}
	if((a == 17 && b == 26) || (a == 26 && b == 17)){
		document.getElementById("pared-50").classList.add("active")
	}

	/*PAREDES FILA 5*/
	if((a == 18 && b == 19) || (a == 19 && b == 18)){
		document.getElementById("pared-51").classList.add("active")
	}
	if((a == 19 && b == 20) || (a == 20 && b == 19)){
		document.getElementById("pared-52").classList.add("active")
	}
	if((a == 20 && b == 21) || (a == 21 && b == 20)){
		document.getElementById("pared-53").classList.add("active")
	}
	if((a == 21 && b == 22) || (a == 22 && b == 21)){
		document.getElementById("pared-54").classList.add("active")
	}
	if((a == 22 && b == 23) || (a == 23 && b == 22)){
		document.getElementById("pared-55").classList.add("active")
	}
	if((a == 23 && b == 24) || (a == 24 && b == 23)){
		document.getElementById("pared-56").classList.add("active")
	}
	if((a == 24 && b == 25) || (a == 25 && b == 24)){
		document.getElementById("pared-57").classList.add("active")
	}
	if((a == 25 && b == 26) || (a == 26 && b == 25)){
		document.getElementById("pared-58").classList.add("active")
	}

	/*PAREDES FILA 6*/
	if((a == 18 && b == 27) || (a == 27 && b == 18)){
		document.getElementById("pared-59").classList.add("active")
	}
	if((a == 19 && b == 28) || (a == 28 && b == 19)){
		document.getElementById("pared-61").classList.add("active")
	}
	if((a == 20 && b == 29) || (a == 29 && b == 20)){
		document.getElementById("pared-63").classList.add("active")
	}
	if((a == 21 && b == 30) || (a == 30 && b == 21)){
		document.getElementById("pared-65").classList.add("active")
	}
	if((a == 22 && b == 31) || (a == 31 && b == 22)){
		document.getElementById("pared-67").classList.add("active")
	}
	if((a == 23 && b == 32) || (a == 32 && b == 23)){
		document.getElementById("pared-69").classList.add("active")
	}
	if((a == 24 && b == 33) || (a == 33 && b == 24)){
		document.getElementById("pared-71").classList.add("active")
	}
	if((a == 25 && b == 34) || (a == 34 && b == 25)){
		document.getElementById("pared-73").classList.add("active")
	}
	if((a == 26 && b == 35) || (a == 35 && b == 26)){
		document.getElementById("pared-75").classList.add("active")
	}

	/*PAREDES FILA 7*/
	if((a == 27 && b == 28) || (a == 28 && b == 27)){
		document.getElementById("pared-76").classList.add("active")
	}
	if((a == 28 && b == 29) || (a == 29 && b == 28)){
		document.getElementById("pared-77").classList.add("active")
	}
	if((a == 29 && b == 30) || (a == 30 && b == 29)){
		document.getElementById("pared-78").classList.add("active")
	}
	if((a == 30 && b == 31) || (a == 31 && b == 30)){
		document.getElementById("pared-79").classList.add("active")
	}
	if((a == 31 && b == 32) || (a == 32 && b == 31)){
		document.getElementById("pared-80").classList.add("active")
	}
	if((a == 32 && b == 33) || (a == 33 && b == 32)){
		document.getElementById("pared-81").classList.add("active")
	}
	if((a == 33 && b == 34) || (a == 34 && b == 33)){
		document.getElementById("pared-82").classList.add("active")
	}
	if((a == 34 && b == 35) || (a == 35 && b == 34)){
		document.getElementById("pared-83").classList.add("active")
	}

	/*PAREDES FILA 8*/
	if((a == 27 && b == 36) || (a == 36 && b == 27)){
		document.getElementById("pared-84").classList.add("active")
	}
	if((a == 28 && b == 37) || (a == 37 && b == 28)){
		document.getElementById("pared-86").classList.add("active")
	}
	if((a == 29 && b == 38) || (a == 38 && b == 29)){
		document.getElementById("pared-88").classList.add("active")
	}
	if((a == 30 && b == 39) || (a == 39 && b == 30)){
		document.getElementById("pared-90").classList.add("active")
	}
	if((a == 31 && b == 40) || (a == 40 && b == 31)){
		document.getElementById("pared-92").classList.add("active")
	}
	if((a == 32 && b == 41) || (a == 41 && b == 32)){
		document.getElementById("pared-94").classList.add("active")
	}
	if((a == 33 && b == 42) || (a == 42 && b == 33)){
		document.getElementById("pared-96").classList.add("active")
	}
	if((a == 34 && b == 43) || (a == 43 && b == 34)){
		document.getElementById("pared-98").classList.add("active")
	}
	if((a == 35 && b == 44) || (a == 44 && b == 35)){
		document.getElementById("pared-100").classList.add("active")
	}

	/*PAREDES FILA 9*/
	if((a == 36 && b == 37) || (a == 37 && b == 36)){
		document.getElementById("pared-101").classList.add("active")
	}
	if((a == 37 && b == 38) || (a == 38 && b == 37)){
		document.getElementById("pared-102").classList.add("active")
	}
	if((a == 38 && b == 39) || (a == 39 && b == 38)){
		document.getElementById("pared-103").classList.add("active")
	}
	if((a == 39 && b == 40) || (a == 40 && b == 39)){
		document.getElementById("pared-104").classList.add("active")
	}
	if((a == 40 && b == 41) || (a == 41 && b == 40)){
		document.getElementById("pared-105").classList.add("active")
	}
	if((a == 41 && b == 42) || (a == 42 && b == 41)){
		document.getElementById("pared-106").classList.add("active")
	}
	if((a == 42 && b == 43) || (a == 43 && b == 42)){
		document.getElementById("pared-107").classList.add("active")
	}
	if((a == 43 && b == 44) || (a == 44 && b == 43)){
		document.getElementById("pared-108").classList.add("active")
	}

	/*PAREDES FILA 10*/
	if((a == 36 && b == 45) || (a == 45 && b == 36)){
		document.getElementById("pared-109").classList.add("active")
	}
	if((a == 37 && b == 46) || (a == 46 && b == 37)){
		document.getElementById("pared-111").classList.add("active")
	}
	if((a == 38 && b == 47) || (a == 47 && b == 38)){
		document.getElementById("pared-113").classList.add("active")
	}
	if((a == 39 && b == 48) || (a == 48 && b == 39)){
		document.getElementById("pared-115").classList.add("active")
	}
	if((a == 40 && b == 49) || (a == 49 && b == 40)){
		document.getElementById("pared-117").classList.add("active")
	}
	if((a == 41 && b == 50) || (a == 50 && b == 41)){
		document.getElementById("pared-119").classList.add("active")
	}
	if((a == 42 && b == 51) || (a == 51 && b == 42)){
		document.getElementById("pared-121").classList.add("active")
	}
	if((a == 43 && b == 52) || (a == 52 && b == 43)){
		document.getElementById("pared-123").classList.add("active")
	}
	if((a == 44 && b == 53) || (a == 53 && b == 44)){
		document.getElementById("pared-125").classList.add("active")
	}

	/*PAREDES FILA 11*/
	if((a == 45 && b == 46)){
		document.getElementById("pared-126").classList.add("active")
	}
	if((a == 46 && b == 47)){
		document.getElementById("pared-127").classList.add("active")
	}
	if((a == 47 && b == 48)){
		document.getElementById("pared-128").classList.add("active")
	}
	if((a == 48 && b == 49)){
		document.getElementById("pared-129").classList.add("active")
	}
	if((a == 49 && b == 50)){
		document.getElementById("pared-130").classList.add("active")
	}
	if((a == 50 && b == 51)){
		document.getElementById("pared-131").classList.add("active")
	}
	if((a == 51 && b == 52)){
		document.getElementById("pared-132").classList.add("active")
	}
	if((a == 52 && b == 53)){
		document.getElementById("pared-133").classList.add("active")
	}

	/*PAREDES FILA 12*/
	if((a == 45 && b == 54)){
		document.getElementById("pared-134").classList.add("active")
	}
	if((a == 46 && b == 55)){
		document.getElementById("pared-136").classList.add("active")
	}
	if((a == 47 && b == 56)){
		document.getElementById("pared-138").classList.add("active")
	}
	if((a == 48 && b == 57)){
		document.getElementById("pared-140").classList.add("active")
	}
	if((a == 49 && b == 58)){
		document.getElementById("pared-142").classList.add("active")
	}
	if((a == 50 && b == 59)){
		document.getElementById("pared-144").classList.add("active")
	}
	if((a == 51 && b == 60)){
		document.getElementById("pared-146").classList.add("active")
	}
	if((a == 52 && b == 61)){
		document.getElementById("pared-148").classList.add("active")
	}
	if((a == 53 && b == 62)){
		document.getElementById("pared-150").classList.add("active")
	}

	/*PAREDES FILA 13*/
	if((a == 54 && b == 55)){
		document.getElementById("pared-151").classList.add("active")
	}
	if((a == 55 && b == 56)){
		document.getElementById("pared-152").classList.add("active")
	}
	if((a == 56 && b == 57)){
		document.getElementById("pared-153").classList.add("active")
	}
	if((a == 57 && b == 58)){
		document.getElementById("pared-154").classList.add("active")
	}
	if((a == 58 && b == 59)){
		document.getElementById("pared-155").classList.add("active")
	}
	if((a == 59 && b == 60)){
		document.getElementById("pared-156").classList.add("active")
	}
	if((a == 60 && b == 61)){
		document.getElementById("pared-157").classList.add("active")
	}
	if((a == 61 && b == 62)){
		document.getElementById("pared-158").classList.add("active")
	}

	/*PAREDES FILA 14*/
	if((a == 54 && b == 63)){
		document.getElementById("pared-159").classList.add("active")
	}
	if((a == 55 && b == 64)){
		document.getElementById("pared-161").classList.add("active")
	}
	if((a == 56 && b == 65)){
		document.getElementById("pared-163").classList.add("active")
	}
	if((a == 57 && b == 66)){
		document.getElementById("pared-165").classList.add("active")
	}
	if((a == 58 && b == 67)){
		document.getElementById("pared-167").classList.add("active")
	}
	if((a == 59 && b == 68)){
		document.getElementById("pared-169").classList.add("active")
	}
	if((a == 60 && b == 69)){
		document.getElementById("pared-171").classList.add("active")
	}
	if((a == 61 && b == 70)){
		document.getElementById("pared-173").classList.add("active")
	}
	if((a == 62 && b == 71)){
		document.getElementById("pared-175").classList.add("active")
	}

	/*PAREDES FILA 15*/
	if((a == 63 && b == 64)){
		document.getElementById("pared-176").classList.add("active")
	}
	if((a == 64 && b == 65)){
		document.getElementById("pared-177").classList.add("active")
	}
	if((a == 65 && b == 66)){
		document.getElementById("pared-178").classList.add("active")
	}

	if((a == 66 && b == 67)){
		document.getElementById("pared-179").classList.add("active")
	}
	if((a == 67 && b == 68)){
		document.getElementById("pared-180").classList.add("active")
	}
	if((a == 68 && b == 69)){
		document.getElementById("pared-181").classList.add("active")
	}
	if((a == 69 && b == 70)){
		document.getElementById("pared-182").classList.add("active")
	}
	if((a == 70 && b == 71)){
		document.getElementById("pared-183").classList.add("active")
	}

	/*PAREDES FILA 16*/
	if((a == 63 && b == 72)){
		document.getElementById("pared-184").classList.add("active")
	}
	if((a == 64 && b == 73)){
		document.getElementById("pared-186").classList.add("active")
	}
	if((a == 65 && b == 74)){
		document.getElementById("pared-188").classList.add("active")
	}
	if((a == 66 && b == 75)){
		document.getElementById("pared-190").classList.add("active")
	}
	if((a == 67 && b == 76)){
		document.getElementById("pared-192").classList.add("active")
	}
	if((a == 68 && b == 77)){
		document.getElementById("pared-194").classList.add("active")
	}
	if((a == 69 && b == 78)){
		document.getElementById("pared-196").classList.add("active")
	}
	if((a == 70 && b == 79)){
		document.getElementById("pared-198").classList.add("active")
	}
	if((a == 71 && b == 80)){
		document.getElementById("pared-200").classList.add("active")
	}

	/*PAREDES FILA 17*/
	if((a == 72 && b == 73)){
		document.getElementById("pared-201").classList.add("active")
	}
	if((a == 73 && b == 74)){
		document.getElementById("pared-202").classList.add("active")
	}
	if((a == 74 && b == 75)){
		document.getElementById("pared-203").classList.add("active")
	}
	if((a == 75 && b == 76)){
		document.getElementById("pared-204").classList.add("active")
	}
	if((a == 76 && b == 77)){
		document.getElementById("pared-205").classList.add("active")
	}
	if((a == 77 && b == 78)){
		document.getElementById("pared-206").classList.add("active")
	}
	if((a == 78 && b == 79)){
		document.getElementById("pared-207").classList.add("active")
	}
	if((a == 79 && b == 80)){
		document.getElementById("pared-208").classList.add("active")
	}
}

function remove_edge(G, a, b){
	G[a].splice(G[a].indexOf(b), 1)
	G[b].splice(G[b].indexOf(a), 1)
	
}

function AI_Gabriel(g, s, w, p, num) {
	var aux_move = null
	var aux_idx = 0
    var nn = g.length
    var n = Number(Math.sqrt(nn))
    var pos_opponent = []
    for(i = 0;i<p.length;i++){
    	if(i != num) pos_opponent.push(p[i])
    }
    var fin = -1

    var parent = new Array(nn)
    var f_cost = new Array(nn)
    var g_cost = new Array(nn)
    var h_cost = new Array(nn)

    parent.fill(null)
    f_cost.fill(999)
    g_cost.fill(999)
    h_cost.fill(0)
	
	if(num == 0){
		for (var v = 0; v < nn; v++) {
			h_cost[v] = Math.floor(v / n)
		}
	}
	if(num == 1){
		for (var v = 0; v < nn; v++) {
			h_cost[v] = (n-1) - Math.floor(v / n)
		}
	}
	if(num == 2){
		for (var v = 0; v < nn; v++) {
			h_cost[v] = (n-1) - v%n
		}
	}
	if(num == 3){
		for (var v = 0; v < nn; v++) {
			h_cost[v] = v%n
		}
	}

    var open = new Array()
    var closed = new Array()

    open.push(s)

    g_cost[s] = 0
    f_cost[s] = g_cost[s] + h_cost[s]

	let aux_verifi

    function lowestf() {
		if(open.length == 0){
			aux_verifi = true
			return null
		}
        var minf = f_cost[open[0]]
        var mini = open[0]
        
        for (var x = 0; x < open.length; x++) {
            if (f_cost[open[x]] < minf) {
                minf = f_cost[open[x]]
                mini = open[x]
            }
		}
		aux_verifi = false
        return mini
    }

    while (true) {
		var current = lowestf()
		if(aux_idx == 1){
			aux_move = current
			aux_idx = 2
		}
		aux_idx++
		if(aux_verifi) return aux_move
        open.splice(open.indexOf(current), 1)

        closed.push(current)

        if (w.includes(current)) {
            fin = current
            break
        }

        for (var x = 0; x < g[current].length; x++) {
          var vecino = g[current][x]
            function comp_veci(veci) {
                if ((g_cost[current] + 1 < g_cost[veci]) || (!open.includes(veci))) {
                    g_cost[veci] = g_cost[current] + 1
                    f_cost[veci] = g_cost[veci] + h_cost[veci]
                    parent[veci] = current
                    if (!open.includes(veci)) {
                        open.push(veci)
                    }
                }
            }

            if (pos_opponent.includes(vecino)) {              
                closed.push(vecino)
                var jump = vecino + (vecino - current)
                if (g[vecino].includes(jump)) {
                    vecino = jump
                    
                } else {
                    for (var x = 0; x < g[vecino].length; x++) {                      
                      new_vecino = g[vecino][x];
                        if (!closed.includes(new_vecino)) {
                            comp_veci(new_vecino)
                        }
                    }
                }
            }

            if (closed.includes(vecino)) {
                continue
            }

            comp_veci(vecino)
        }

    }

    var camino = new Array()
    var aux = fin
    

    while (aux != null) {
        camino.push(aux)
        aux = parent[aux]
    }
	camino.reverse()
	if(camino.length == 1) console.log("F")
    return camino
}

function AI_Marco(G, s, w,posiciones){
    stack = new Stack()
    stack.push(s);
    camino = []
    visitados = []
    for(i = 0;i < 80; i++){
        visitados[i] = false;
    }
    while(true){
        curNode = stack.peek()
        if(posiciones[0] != curNode && posiciones[2] != curNode && posiciones[3] != curNode){
            camino.push(curNode)
        } else {
            for(i = 0;i<posiciones.length;i++){
                if(i!=1 && posiciones[i] == curNode){
                    let diff = posiciones[i] - posiciones[1]
                    if(G[posiciones[i]].includes(posiciones[i] + diff)){
                        curNode = posiciones[i] + diff;
                        camino.push(curNode)
                    } else {
                        let npos;
                        for(x = 0;x<G[curNode].length;x++){
                            if(!posiciones.includes(G[curNode][x])){
                                npos = G[curNode][x]
                                break;
                            }
                        }
                        curNode = npos
                        camino.push(curNode);
                    }
                    break;
                }
            }
        }
        visitados[curNode] = true
         if( w.includes(curNode)){
            break;
        }
        let unvisited = 0;
        for(i = 0;i<G[curNode].length;i++){
            if(visitados[G[curNode][i]]==false){
                stack.push(G[curNode][i])
                unvisited++
            }
        }

        if(unvisited == 0){
            stack.pop()
        }
    }
    return camino
}

function AI_Wilmar(G, s, w){
	let Datos = new Stack()
	Datos.push(s)
	let Camino = [s]
	while(!w.includes(Datos.peek())){
		if(G[Datos.peek()].includes(Datos.peek() + 1)){
			Datos.push(Datos.peek() + 1)
			Camino.push(Datos.peek())
		}
		else if(G[Datos.peek()].includes(Datos.peek() - 9)){
			Datos.push(Datos.peek() - 9)
			Camino.push(Datos.peek())
		}
		else if(G[Datos.peek()].includes(Datos.peek() + 9)){
			Datos.push(Datos.peek() + 9)
			Camino.push(Datos.peek())
		}
		else{
			Datos.push(Datos.peek() - 1)
			Camino.push(Datos.peek())
		}
	}
	console.log(Camino)
	return Camino
}

function Jugador1(){
	Distancias = Calcular_Jugadas_Restantes()
	if((Distancias[0] <= Distancias[1] && Distancias[0] <= Distancias[2] && Distancias[0] <= Distancias[3]) || Paredes[0] == 0){
		let Camino = AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0)
		console.log("Jugador 1 se mueve de: " + posiciones[0] + " a " + Camino[1])
		posiciones[0] = Camino[1]
	}
	else{
		if(Distancias[1] < Distancias[2] && Distancias[1] < Distancias[3]){
			let Camino_Jugador2 = AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1)
			if(Valida_Paredes(Grafo, posiciones[1], Camino_Jugador2[1])) Paredes[0]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0)
				console.log("Jugador 1 se mueve de: " + posiciones[0] + " a " + Camino[1])
				posiciones[0] = Camino[1]
			}
		}
		else if(Distancias[2] < Distancias[1] && Distancias[2] < Distancias[3]){
			let Camino_Jugador3 = AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, 2)
			if(Valida_Paredes(Grafo, posiciones[2], Camino_Jugador3[1])) Paredes[0]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0)
				console.log("Jugador 1 se mueve de: " + posiciones[0] + " a " + Camino[1])
				posiciones[0] = Camino[1]
			}
		}
		else{
			let Camino_Jugador4 = AI_Gabriel(Grafo, posiciones[3], Meta_Jugador4, posiciones, 3)
			if(Valida_Paredes(Grafo, posiciones[3], Camino_Jugador4[1])) Paredes[0]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0)
				console.log("Jugador 1 se mueve de: " + posiciones[0] + " a " + Camino[1])
				posiciones[0] = Camino[1]
			}
		}
	}
	turno = cambiar_turno(0)
}

function Jugador2(){
	Distancias = Calcular_Jugadas_Restantes()
	if((Distancias[1] <= Distancias[0] && Distancias[1] <= Distancias[2] && Distancias[1] <= Distancias[3]) || Paredes[1] == 0){
		let Camino = AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1)
		console.log("Jugador 2 se mueve de: " + posiciones[1] + " a " + Camino[1])
		posiciones[1] = Camino[1]
	}
	else{
		if(Distancias[0] < Distancias[2] && Distancias[0] < Distancias[3]){
			let Camino_Jugador1 = AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0)
			if(Valida_Paredes(Grafo, posiciones[0], Camino_Jugador1[1])) Paredes[1]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1)
				console.log("Jugador 2 se mueve de: " + posiciones[1] + " a " + Camino[1])
				posiciones[1] = Camino[1]
			}
		}
		else if(Distancias[2] < Distancias[0] && Distancias[2] < Distancias[3]){
			let Camino_Jugador3 = AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, 2)
			if(Valida_Paredes(Grafo, posiciones[2], Camino_Jugador3[1])) Paredes[1]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1)
				console.log("Jugador 2 se mueve de: " + posiciones[1] + " a " + Camino[1])
				posiciones[1] = Camino[1]
			}
		}
		else{
			let Camino_Jugador4 = AI_Gabriel(Grafo, posiciones[3], Meta_Jugador4, posiciones, 3)
			if(Valida_Paredes(Grafo, posiciones[3], Camino_Jugador4[1])) Paredes[1]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1)
				console.log("Jugador 2 se mueve de: " + posiciones[1] + " a " + Camino[1])
				posiciones[1] = Camino[1]
			}
		}
	}
	turno = cambiar_turno(1)
}

function Jugador3(){
	Distancias = Calcular_Jugadas_Restantes()
	if((Distancias[2] <= Distancias[0] && Distancias[2] <= Distancias[1] && Distancias[2] <= Distancias[3]) || Paredes[2] == 0){
		let Camino = AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, 2)
		console.log("Jugador 3 se mueve de: " + posiciones[2] + " a " + Camino[1])
		posiciones[2] = Camino[1]
	}
	else{
		if(Distancias[0] < Distancias[1] && Distancias[0] < Distancias[3]){
			let Camino_Jugador1 = AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0)
			if(Valida_Paredes(Grafo, posiciones[0], Camino_Jugador1[1])) Paredes[2]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, 2)
				console.log("Jugador 3 se mueve de: " + posiciones[2] + " a " + Camino[1])
				posiciones[2] = Camino[1]	
			}
		}
		else if(Distancias[1] < Distancias[0] && Distancias[1] < Distancias[3]){
			let Camino_Jugador2 = AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1)
			if(Valida_Paredes(Grafo, posiciones[1], Camino_Jugador2[1])) Paredes[2]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, posiciones, 2)
				console.log("Jugador 3 se mueve de: " + posiciones[2] + " a " + Camino[1])
				posiciones[2] = Camino[1]	
			}
		}
		else{
			let Camino_Jugador4 = AI_Gabriel(Grafo, posiciones[3], Meta_Jugador4, posiciones, 3)
			if(Valida_Paredes(Grafo, posiciones[3], Camino_Jugador4[1])) Paredes[2]--
			else{
				let Camino = AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, 2)
				console.log("Jugador 3 se mueve de: " + posiciones[2] + " a " + Camino[1])
				posiciones[2] = Camino[1]	
			}
		}
	}
	turno = cambiar_turno(2)
}

function Simulación_Jugador4(){
	turno = 0
}

function Valida_Paredes(G, I, F){
	G_aux = JSON.parse(JSON.stringify(G))
	let Diferencia = Math.abs(I - F)
	let Factor = 10 - Diferencia
	let C = I - Factor
	let D = F - Factor
	if(!G_aux.includes(C)){
		C = I + Factor
		D = F + Factor
		if(C > 80 || D > 80) return false
		if(!G_aux[C].includes(D)) return false
	}
	if(!G_aux[I].includes(C) && !G_aux[F].includes(D)) return false

	remove_edge(G_aux, I, F)
	remove_edge(G_aux, C, D)

	if(No_Encerrado(G_aux))	return false
	else{
		Grafo = JSON.parse(JSON.stringify(G_aux))
		console.log("Pared entre: " + I + " " + F + " y " + C + " " + D)
		dibujarPared(Math.min(I,F),Math.max(I,F))
		dibujarPared(Math.min(C,D),Math.max(C,D))
		return true
	}
}

function Calcular_Jugadas_Restantes(){
	let a = []
	a.push(AI_Gabriel(Grafo, posiciones[0], Meta_Jugador1, posiciones, 0).length)
	a.push(AI_Gabriel(Grafo, posiciones[1], Meta_Jugador2, posiciones, 1).length)
	a.push(AI_Gabriel(Grafo, posiciones[2], Meta_Jugador3, posiciones, 2).length)
	a.push(AI_Gabriel(Grafo, posiciones[3], Meta_Jugador4, posiciones, 3).length)
	return a
}

function No_Encerrado(G){
	let N = G.length
	let Visitado = []
	for(let i = 0; i < N; ++i) Visitado[i] = false
	
	function DFS(V){
		Visitado[V] = true
		for(let e = 0; e < G[V].length; ++e){
			if(!Visitado[G[V][e]]){
				DFS(G[V][e])
			}
		}
	}

	for(let v = 0; v < N; ++v){
		if(!Visitado[v]){
			if(v == 0){
				DFS(v)
			}
			else return true
		}
	}
	return false
}

window.onload = function(){
	document.onkeypress = conseguirKey
}

function conseguirKey(objeto){
	let tecla = objeto.which
	console.log(tecla)
	if(!winner){
		desplazar(tecla)
	}
}

function cambiar_turno(turno){
	if(turno <= 2){
		turno++;
	} else {
		turno = 0;
	}
	document.getElementById("caja_turno").innerHTML = turno;
	return turno
}

function moverFicha(posicion,ficha){
	id_1 = "celda-" + posicion;
	center = document.createElement("center");
	celda = document.getElementById(id_1)
	center.appendChild(ficha)
	celda.appendChild(center)
}

function desplazar(tecla){
	let ficha,celda,id_1;
	ficha = document.getElementById('j' + (turno+1))
	switch (tecla){
		/*SI PRESIONA ENTER*/
		case 13:
			if(turno == 0){
				Jugador1()
	    		moverFicha(posiciones[0],ficha)
	    		if(Meta_Jugador1.includes(posiciones[0])){
	    			alert("GANO EL JUGADOR 0")
	    			winner = true;
	    		}
			} else if(turno == 1){
				
				Jugador2()
				moverFicha(posiciones[1],ficha)
	    		if(Meta_Jugador2.includes(posiciones[1])){
	    			alert("GANO EL JUGADOR 1")
	    			winner = true;
	    		}
	    		turno = cambiar_turno(1)
			} else if(turno == 2){
				Jugador3()
				moverFicha(posiciones[2],ficha)
	    		if(Meta_Jugador3.includes(posiciones[2])){
	    			alert("GANO EL JUGADOR 2")
	    			winner = true;
	    		}
			} 
			//cambiar_turno(turno)
		break;
		case 97:
			if(posiciones[turno] - 1 >= 0 && turno > 2){
				if (condicionales_J1("Izquierda")){
					posiciones[turno] -= 1
					if (posiciones[turno] == posiciones[0] || posiciones[turno] == posiciones[1] || posiciones[turno] == posiciones[2]){
						if(condicionales_J1("Izquierda")) posiciones[turno] -= 1
					}
					moverFicha(posiciones[3],ficha)
				}
				turno = cambiar_turno(3)
			}
			if(Meta_Jugador4.includes(posiciones[3])){
	    		alert("GANO EL JUGADOR 3")
	    		winner = true;
	    	}
	    	
		break;
		case 119:
			if(posiciones[turno] - 9 >= 0 && turno > 2){
				if (condicionales_J1("Abajo")){
					posiciones[turno] -= 9
					if (posiciones[turno] == posiciones[0] || posiciones[turno] == posiciones[1] || posiciones[turno] == posiciones[2]){
						if(condicionales_J1("Abajo")) posiciones[turno] -= 9
					}
					moverFicha(posiciones[3],ficha)
				}
				turno = cambiar_turno(3)
			}
			if(Meta_Jugador4.includes(posiciones[3])){
	    		alert("GANO EL JUGADOR 3")
	    		winner = true;
	    	}
	    	
		break;
		case 100:
			if(posiciones[turno] + 1 <= 80 && turno > 2){
				if (condicionales_J1("Derecha")){
					posiciones[turno] += 1
					if (posiciones[turno] == posiciones[0] || posiciones[turno] == posiciones[1] || posiciones[turno] == posiciones[2]){
						if(condicionales_J1("Derecha")) posiciones[turno] += 1
					}
					moverFicha(posiciones[3],ficha)
				}
				turno = cambiar_turno(3)
			}
			if(Meta_Jugador4.includes(posiciones[3])){
	    		alert("GANO EL JUGADOR 3")
	    		winner = true;
	    	}
		break;
		case 115:
			if(posiciones[turno] + 9 <= 80 && turno > 2){
				if (condicionales_J1("Arriba")){
					posiciones[turno] += 9
					if (posiciones[turno] == posiciones[0] || posiciones[turno] == posiciones[1] || posiciones[turno] == posiciones[2]){
						if (condicionales_J1("Arriba")) posiciones[turno] += 9
					}
					moverFicha(posiciones[3],ficha)
				}
				turno = cambiar_turno(3)
			}
			if(Meta_Jugador4.includes(posiciones[3])){
	    		alert("GANO EL JUGADOR 3")
	    		winner = true;
	    	}
	    	
		break;

	}
}

function condicionales_J1(Direccion){
	if (Direccion == "Izquierda"){
		for (let i = 0; i < Grafo[posiciones[3]].length; ++i){
			if(Grafo[posiciones[3]][i] == posiciones[3] - 1) return true
		}
		return false
	}
	if (Direccion == "Derecha"){
		for (let i = 0; i < Grafo[posiciones[3]].length; ++i){
			if(Grafo[posiciones[3]][i] == posiciones[3] + 1) return true
		}
		return false
	}
	if (Direccion == "Arriba"){
		for (let i = 0; i < Grafo[posiciones[3]].length; ++i){
			if(Grafo[posiciones[3]][i] == posiciones[3] + 9) return true
		}
		return false
	}
	if (Direccion == "Abajo"){
		for (let i = 0; i < Grafo[posiciones[3]].length; ++i){
			if(Grafo[posiciones[3]][i] == posiciones[3] - 9) return true
		}
		return false
	}
}

/*window.onload = function(){
	while(!Winner){
		if(turno == 0) Jugador1()
		if(Meta_Jugador1.includes(posiciones[0])) Winner = true
		if(turno == 1) Jugador2()
		if(Meta_Jugador2.includes(posiciones[1])) Winner = true
		if(turno == 2) Jugador3()
		if(Meta_Jugador3.includes(posiciones[2])) Winner = true
		if(turno == 3) Simulación_Jugador4()
	}
	if(Meta_Jugador1.includes(posiciones[0])) console.log("EL GANADOR ES EL JUGADOR 1")
	else if(Meta_Jugador2.includes(posiciones[1])) console.log("EL GANADOR ES EL JUGADOR 2")
	else if(Meta_Jugador3.includes(posiciones[2])) console.log("EL GANADOR ES EL JUGADOR 3")
}*/