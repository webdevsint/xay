const desktop = document.querySelector(".desktop");

let height = screen.height / 2;
let width = screen.width / 2;

console.log(screen.width);

if (screen.width < 600) {
  width = screen.width / 1.3;
}

function musicWindow() {
  if (!desktop.classList.contains("musicWindow")) {
    new WinBox("my music", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      html: '<iframe src="./views/music.html" style="background: #ffff url(./assets/images/folder.png) center center no-repeat;"></iframe>',
      onclose: function (force) {
        desktop.classList.remove("musicWindow");
      },
    });
    desktop.classList.add("musicWindow");
  } else {
    return;
  }
}

function beatsWindow() {
  if (!desktop.classList.contains("beatsWindow")) {
    new WinBox("beats", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      html: '<iframe src="./views/beats.html" style="background: #ffff url(./assets/images/folder.png) center center no-repeat;"></iframe>',
      onclose: function (force) {
        desktop.classList.remove("beatsWindow");
      },
    });
    desktop.classList.add("beatsWindow");
  } else {
    return;
  }
}

function drumsWindow() {
  if (!desktop.classList.contains("drumsWindow")) {
    new WinBox("drum kits", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      html: '<iframe src="./views/drumkits.html" style="background: #ffff url(./assets/images/folder.png) center center no-repeat;"></iframe>',
      onclose: function (force) {
        desktop.classList.remove("drumsWindow");
      },
    });
    desktop.classList.add("drumsWindow");
  } else {
    return;
  }
}

function twitterWindow() {
  if (!desktop.classList.contains("twitterWindow")) {
    new WinBox("xaylovesnishi - twitter", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      onclose: function (force) {
        desktop.classList.remove("twitterWindow");
      },
      html: '<iframe src="./views/twitter.html" style="background: #1d9bf0 url(./assets/images/twitter.png) center center no-repeat;"></iframe>',
    });
    desktop.classList.add("twitterWindow");
  } else {
    return;
  }
}

function furryWindow() {
  if (!desktop.classList.contains("furryWindow")) {
    new WinBox("furry porn", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      html: '<iframe src="./views/furry.html" style="background: #ffff url(./assets/images/folder.png) center center no-repeat;"></iframe>',
      onclose: function (force) {
        desktop.classList.remove("furryWindow");
      },
    });
    desktop.classList.add("furryWindow");
  } else {
    return;
  }
}

function linksWindow() {
  if (!desktop.classList.contains("linksWindow")) {
    new WinBox("my links", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      html: '<iframe src="./views/links.html" style="background: #ffff url(https://assets.production.linktr.ee/profiles/_next/static/images/logo-gofundme-green-06c2c752e12167fa4bc44511d7b15de6.gif) center center no-repeat;"></iframe>',
      onclose: function (force) {
        desktop.classList.remove("linksWindow");
      },
    });
    desktop.classList.add("linksWindow");
  } else {
    return;
  }
}

function spotifyWindow() {
  if (!desktop.classList.contains("spotifyWindow")) {
    new WinBox("xaydex. - spotify", {
      height: height,
      width: width,
      bottom: 6,
      border: 3,
      html: '<iframe src="https://open.spotify.com/embed/artist/614tO82lYAo2eKBmLBXaA4?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" style="background: black url(./assets/images/spotify.png) center center no-repeat;"></iframe>',
      onclose: function (force) {
        desktop.classList.remove("spotifyWindow");
      },
    });
    desktop.classList.add("spotifyWindow");
  } else {
    return;
  }
}
