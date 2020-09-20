# Getting Started

## What is ReactHalfmoon?
React components for [Halfmoon](https://www.gethalfmoon.com/), a front-end framework with a built-in dark mode.

[Documentation](https://reacthalfmoon.github.io)

## Installation

### 1. Install the package

```
npm i reacthalfmoon
```

<<<<<<< HEAD
If you see lot of vulnerabilities just run 
=======
If you see lot of vulnerability just run 
>>>>>>> a108d2ecbcd6d1c81e6d7ce4a5e6b51149dda8cf

```
npm audit fix
```

### 2. Add the css file

#### Using `link`
In `public/index.html` link the css file

```html
<link href="https://cdn.jsdelivr.net/npm/halfmoon@1.1.0/css/halfmoon.min.css" rel="stylesheet" />
```

#### Or using `import`
In `App.css` import the css file

```css
@import url("https://cdn.jsdelivr.net/npm/halfmoon@1.1.0/css/halfmoon.min.css");
```

## Usage

### **Button Component**

```js
import React from 'react';
import { Button } from 'reacthalfmoon';

function App() {
  return (
      <Button color="primary">Primary</Button>
  )
}

export default App
```

### **Darkmode**

```js
import React, {useState} from 'react';
import { DarkmodeSwitch } from 'reacthalfmoon';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  return (
      <DarkmodeSwitch checked={darkmode} toggle={()=>{setDarkmode(!darkmode)}} />
  )
}

export default App
```
