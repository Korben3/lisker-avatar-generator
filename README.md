# lisker-avatar-generator

Lisker avatar generator allows users to create their own lisker avatar. It's a react component that can be implemented into your react project. Just download the generator and copy the folder "LiskerGenerator" into your project's directory. It doesn't depend on any other external libraries.

The property "setLiskerId" allows you to set the default image using a lisker Id string. When a user makes a change it creates a new liskerId which can be catched using the "getLiskerId" function. A basic example of implementing the generator:
```
import LiskerGenerator from "./LiskerGenerator";

  const App = () => {

  const getLiskerId = (liskerId) => {
    console.log(liskerId);
   };

  return (
    <div>
      <LiskerGenerator
        getLiskerId={getLiskerId}
        setLiskerId="t111t311t412t491t523t531t541t551t701t801t851c1D8E6EDc25300EBc3E38E61c42C1B18"
      />
   </div>
  );
};

export default App;`}
```

You can see the Lisker Generator in action in the [Lisker Blockchain Demo](http://demo.lisker.io/lisker)

For more information about Lisker, check the official website [Lisker.io](https://lisker.io)
