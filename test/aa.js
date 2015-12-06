window.onload = function() {

    //AUDIO SETUP

    var audio,
        analyser,
        audioContext,
        sourceNode;

    audio = new Audio();

    audio.src = '/uploads/141102/paradise_circus.mp3';

    audio.addEventListener("canplay", function(e) {
        setup();
    }, false);

    function setup() {
        audioContext = new webkitAudioContext();
        analyser = (analyser || audioContext.createAnalyser());
        analyser.smoothingTimeConstant = 0.7;
        analyser.fftSize = 512;

        sourceNode = audioContext.createMediaElementSource(audio);
        sourceNode.connect(analyser);
        sourceNode.connect(audioContext.destination);

        audio.play();
        createParticles();
        update();
    }


    // ANIMATION SETUP

    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particleCount = 256, // AUDIO NODES
        slice = Math.PI * 2 / particleCount,
        particles = [];

    function createParticles() {
        for (var i = 0; i < particleCount; i += 1) {
            var angle = i * slice,
                x = width / 2 + Math.cos(angle) * width / 3,
                y = height / 2 + Math.sin(angle) * height / 4;

            var p = particle.create(x, y, 0, -Math.PI / 2, .1);
            p.radius = 0;
            p.friction = .4;

            particles.push(p);
        }
    };

    function update() {
        context.clearRect(0, 0, width, height);
        // AUDIO
        var freqArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(freqArray);

        // ANIMATION
        for (var i = 0; i < freqArray.length; i += 1) {
            var p = particles[i];
            var v = freqArray[i];

            p.velocity.setLength(v / 8);

            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), p.radius + (v / 4), 0, Math.PI * 2, false);
            context.fillStyle = 'rgba( ' + (i / 2) + ', ' + (i / 4) + ', 255, ' + .5 + v / 512 + ')';
            context.fill();

            // COLLISION DETECTION
            if (p.position.getX() + p.radius > width) {
                p.position.setX(width - p.radius);
                p.velocity.setX(p.velocity.getX() * p.bounce);
            }
            if (p.position.getX() - p.radius < 0) {
                p.position.setX(p.radius);
                p.velocity.setX(p.velocity.getX() * p.bounce);
            }
            if (p.position.getY() + p.radius > height) {
                p.position.setY(height - p.radius);
                p.velocity.setY(p.velocity.getY() * p.bounce);
            }
            if (p.position.getY() - p.radius < 0) {
                p.position.setY(p.radius);
                p.velocity.setY(p.velocity.getY() * p.bounce);
            }

            p.update();
        }

        webkitRequestAnimationFrame(update);
    }

}

// PARTICLE LIB

var particle = {
    position: null,
    velocity: null,
    gravity: null,
    mass: 1,
    radius: 0,
    bounce: -1,
    friction: 1,

    create: function(x, y, speed, direction, grav) {
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity = vector.create(0, grav || 0);
        return obj;
    },

    accelerate: function(accel) {
        this.velocity.addTo(accel);
    },

    update: function() {
        this.velocity.multiplyBy(this.friction);
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    },

    angleTo: function(p2) {
        return Math.atan2(p2.position.getY() - this.position.getY(),
            p2.position.getX() - this.position.getX());
    },

    distanceTo: function(p2) {
        var dx = p2.position.getX() - this.position.getX(),
            dy = p2.position.getY() - this.position.getY();

        return Math.sqrt(dx * dx + dy * dy);
    },

    gravitateTo: function(p2) {
        var grav = vector.create(0, 0),
            dist = this.distanceTo(p2);

        grav.setLength(p2.mass / (dist * dist));
        grav.setAngle(this.angleTo(p2));

        this.velocity.addTo(grav);
    }
}


// VECTOR LIB

var vector = {
    _x: 1,
    _y: 0,

    create: function(x, y) {
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX: function(value) {
        this._x = value;
    },

    getX: function() {
        return this._x;
    },

    setY: function(value) {
        this._y = value;
    },

    getY: function() {
        return this._y;
    },

    setAngle: function(angle) {
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getAngle: function() {
        return Math.atan2(this._y, this._x);
    },

    setLength: function(length) {
        var angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getLength: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    },

    add: function(v2) {
        return vector.create(this._x + v2.getX(), this._y + v2.getY());
    },

    subtract: function(v2) {
        return vector.create(this._x - v2.getX(), this._y - v2.getY());
    },

    multiply: function(val) {
        return vector.create(this._x * val, this._y * val);
    },

    divide: function(val) {
        return vector.create(this._x / val, this._y / val);
    },

    addTo: function(v2) {
        this._x += v2.getX();
        this._y += v2.getY();
    },

    subtractFrom: function(v2) {
        this._x -= v2.getX();
        this._y -= v2.getY();
    },

    multiplyBy: function(val) {
        this._x *= val;
        this._y *= val;
    },

    divideBy: function(val) {
        this._x /= val;
        this._y /= val;
    }
};
