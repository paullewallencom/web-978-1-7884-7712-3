## Setup Eslint with airbnb lint
```
export PKG=eslint-config-airbnb;
npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"


node_modules/.bin/eslint --init

# Try linting this code:

console.log('Hello');

const funfunfun = (x,y,z) => {
  if (true) {
    return z
  }
}

node_modules/.bin/eslint ./src


Add custom rule:

rules:
  semi: ["error", "never"]


```

## Setup Stylelint
```
npm install --save-dev stylelint stylelint-config-standard

add .stylelintrc

{
  "extends": "stylelint-config-standard",
  "rules": {
  }
}

node_modules/.bin/stylelint src/**/*.scss
```

