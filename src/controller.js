(function exportController() {
function Controller(ship) {
    this.ship = ship
    this.initialiseSea();
    document.querySelector('#sailbutton').addEventListener('click', () => {
        this.setSail();
    });
}

Controller.prototype = {
    initialiseSea: function() {
        const backgrounds = [
            './images/water0.png',
            './images/water1.png',
          ];
    
          let backgroundCounter = 0;
    
          window.setInterval(() => {
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundCounter % backgrounds.length]}')`;
            backgroundCounter += 1;
          }, 1000);
        },
      renderPorts (ports) {
        const portsElement = document.querySelector('#ports');
        portsElement.style.width = '0px';
        ports.forEach((port, index) => {
          const newPortElement = document.createElement('div');
          newPortElement.dataset.portName = port.name;
          newPortElement.dataset.portIndex = index;
          newPortElement.className = 'port';
          portsElement.appendChild(newPortElement);
          const portsElementWidth = parseInt(portsElement.style.width, 10);
          portsElement.style.width = `${portsElementWidth + 256}px`;
        })
      },
      renderShip () {
          const ship = this.ship
          const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
          const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
          const shipElement = document.querySelector('#ship');
          shipElement.style.top = `${portElement.offsetTop + 32}px`;
          shipElement.style.left = `${portElement.offsetLeft - 32}px`;
        },
      setSail() {
        const ship = this.ship
        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`)
        if (!nextPortElement) {

            return alert('End of the line!');
          
        }
        const shipElement = document.querySelector('#ship');
        const sailInterval = setInterval(() => {
            const shipLeft = parseInt(shipElement.style.left, 10);
            if (shipLeft === (nextPortElement.offsetLeft - 32)) {
                ship.dock();
                clearInterval(sailInterval);
            }
            shipElement.syle.left = `${shipLeft + 1}px`;
        }, 30);
        
        },
    };

    if (typeof module !== 'undefined' && module.exports) {
      module.exports = Controller;
    } else {
      window.Controller = Controller;
  
    }
  
  }());

  

//if (!nextPortElement) {
    //return alert('End of the line!');
    //}