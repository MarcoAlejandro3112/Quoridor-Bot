let turno = 0
let posiciones = [76,4,36,44]

var nn = 81;
var n = Number(Math.sqrt(nn));

var G = new Array(nn);

for (var i = 0; i < nn; i++) {
    G[i] = new Array();
};

for (var v = 0; v < nn; v++) {
    if (v >= n) {
        var u = v - n;
        G[v].push(u);
        G[u].push(v);
    };
    if (v % n != 0) {
        var u = v - 1;
        G[v].push(u)
        G[u].push(v)
    };
};

function remove_edge(G,a,b) {
  G[a].splice(G[a].indexOf(b), 1);
  G[b].splice(G[b].indexOf(a), 1);
};

class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }
   peek() {
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0;
   }
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop(); // removes the last element
     }
   }
   print() {
      var top = this.top - 1; // because top points to index where new    element to be inserted
      while(top >= 0) { // print upto 0th index
          console.log(this.data[top]);
           top--;
       }
    }
    reverse() {
       this._reverse(this.top - 1 );
    }
    _reverse(index) {
       if(index != 0) {
          this._reverse(index-1);
       }
       console.log(this.data[index]);
    }
}


function mapa1(){
	/*MAPA 1*/
	remove_edge(G,12,21)
	remove_edge(G,13,22)
	remove_edge(G,14,23)
	remove_edge(G,21,22)

	remove_edge(G,57,66)
	remove_edge(G,58,67)
	remove_edge(G,59,68)
	remove_edge(G,58,59)

	remove_edge(G,28,29)
	remove_edge(G,37,38)
	remove_edge(G,46,47)
	remove_edge(G,38,47)

	remove_edge(G,33,34)
	remove_edge(G,42,43)
	remove_edge(G,51,52)
	remove_edge(G,33,42)
	/***********************/
}

var start = 76;
var goal = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var goal2 = [72,73,74,75,76,77,78,79,80];
mapa1();

function _dfs(G,root,goal){
	stack = new Stack()
	stack.push(root);
	camino = []
	visitados = []
	for(i = 0;i<80;i++){
		visitados[i] = false;
	}
	while(true){
		console.log(camino)
		curNode = stack.peek()
		camino.push(curNode)
		visitados[curNode] = true
		if(goal.includes(curNode)){
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

function a_star(G, s, goal, posiciones) {
    var nn = G.length;
    var n = Number(Math.sqrt(nn));
    var pos_opponent = []
    for(i = 1;i<posiciones.length;i++){
    	pos_opponent.push(posiciones[i]);
    }
    var fin = -1;

    var parent = new Array(nn);
    var f_cost = new Array(nn);
    var g_cost = new Array(nn);
    var h_cost = new Array(nn);

    parent.fill(null);
    f_cost.fill(999);
    g_cost.fill(999);
    h_cost.fill(0);
    
    for (var v = 0; v < nn; v++) {
        h_cost[v] = Math.floor(v / n);
    };

    var open = new Array();
    var closed = new Array();

    open.push(s);

    g_cost[s] = 0;
    f_cost[s] = g_cost[s] + h_cost[s];

    function lowestf() {
        var minf = f_cost[open[0]];
        var mini = open[0];
        
        for (var x = 0; x < open.length; x++) {
            if (f_cost[open[x]] < minf) {
                minf = f_cost[open[x]];
                mini = open[x];
            };
        };
        return mini;
    };

    while (true) {
        var current = lowestf();
        open.splice(open.indexOf(current), 1);        

        closed.push(current);

        if (goal.includes(current)) {
            fin = current;
            break;
        };

        for (var x = 0; x < G[current].length; x++) {
          var vecino = G[current][x];
            function comp_veci(veci) {
                if ((g_cost[current] + 1 < g_cost[veci]) || (!open.includes(veci))) {
                    g_cost[veci] = g_cost[current] + 1;
                    f_cost[veci] = g_cost[veci] + h_cost[veci];
                    parent[veci] = current;
                    if (!open.includes(veci)) {
                        open.push(veci);
                    };
                };
            };

            if (pos_opponent.includes(vecino)) {              
                closed.push(vecino);
                var jump = vecino + (vecino - current);                
                if (G[vecino].includes(jump)) {
                    vecino = jump;
                    
                } else {
                    for (var x = 0; x < G[vecino].length; x++) {                      
                      new_vecino = G[vecino][x];
                        if (!closed.includes(new_vecino)) {
                            comp_veci(new_vecino);
                        };
                    };
                };
            };

            if (closed.includes(vecino)) {
                continue;
            }

            comp_veci(vecino);
        };

    };

    var camino = new Array();
    var aux = fin;
    

    while (aux != null) {
        camino.push(aux);
        aux = parent[aux];
    }

    camino.reverse();

    return camino;

};

var posicion = start;


/*EVENTO QUE RECIBE LAS TECLAS */
window.onload = function(){
	document.onkeypress = conseguirKey
}

function conseguirKey(objeto){
	let tecla = objeto.which
	console.log(tecla)
	desplazar(tecla)
}
function cambiar_turno(turno){
	if(turno == 0){
		turno++;
	} else {
		turno = 0;
	}
	return turno
}
function desplazar(tecla){
	let ficha1,celda,id_1;
	if(turno == 1){
		ficha1 = document.getElementById('j2')
	} else if(turno == 2){
		ficha1 = document.getElementById('j3')
	} else {
		ficha1 = document.getElementById('j4')
	}
	console.log("TURNO: " + turno);
	switch (tecla){
		case 13:
			if(turno == 0){
				if (!goal.includes(posicion)) {
	    			camino = a_star(G, posicion, goal, posiciones);
	    			posicion = camino[1];
	    			console.log(posiciones);
	    			posiciones[turno] = posicion
	    			console.log("Moverse a posicion: ", posicion);
	    			id_1 = "celda-" + posicion;
	    			center = document.createElement("center");
	    			celda = document.getElementById(id_1)
	    			celda.appendChild(center)
	    			ficha1 = document.getElementById('j1')
	    			center.appendChild(ficha1);
				};
				turno = cambiar_turno(turno);
			} else if(turno == 1){
				if(!goal2.includes(posiciones[1])){
					camino = _dfs(G,posiciones[1],goal2)
					console.log("CAMINO: " + camino)
					posiciones[turno] = camino[1]
					id_1 = "celda-" + camino[1];
	    			center = document.createElement("center");
	    			celda = document.getElementById(id_1)
	    			celda.appendChild(center)
	    			center.appendChild(ficha1);
				}
				turno = cambiar_turno(turno)
			}
		break;
		case 97:
			if(posiciones[turno] - 1 >= 0 && turno > 0){
				id_1 = "celda-" + (posiciones[turno] - 1)
				center = document.createElement("center");
				posiciones[turno] -=1
				celda = document.getElementById(id_1)
				celda.appendChild(center)
				center.appendChild(ficha1)
				turno = cambiar_turno(turno);
			}
		break;
		case 119:
			if(posiciones[turno] - 9 >= 0 && turno > 0){ 
				id_1 = "celda-" + (posiciones[turno] - 9)
				center = document.createElement("center");
				posiciones[turno] -= 9
				celda = document.getElementById(id_1)
				celda.appendChild(center)
				center.appendChild(ficha1)
				turno = cambiar_turno(turno);
			}
		break;
		case 100:
			if(posiciones[turno] + 1 <= 80 && turno > 0){
				id_1 = "celda-" + (posiciones[turno] + 1)
				center = document.createElement("center");
				posiciones[turno] += 1
				celda = document.getElementById(id_1)
				celda.appendChild(center)
				center.appendChild(ficha1)
				turno = cambiar_turno(turno);
			}
		break;
		case 115:
			if(posiciones[turno] + 9 <= 80 && turno > 0){
				id_1 = "celda-" + (posiciones[turno] + 9)
				center = document.createElement("center");
				posiciones[turno] += 9
				celda = document.getElementById(id_1)
				celda.appendChild(center)
				center.appendChild(ficha1)
				turno = cambiar_turno(turno);
			}
		break;

	}
}