import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="collapse">
                <input type="checkbox" class="peer-checked:bg-accent peer" />
                <div class="collapse-title bg-yellow-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.Always render hidden components like Modals and Dropdowns conditionallyAvoid inline functions as much as possible.Keeping component state local where necessary.</p>
                </div>
            </div>
            <hr />

            <div class="collapse">
                <input type="checkbox" class="peer-checked:bg-accent peer" />
                <div class="collapse-title bg-violet-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p>Unit Testing is used to check the independent modules of a software app during the development phase. An independent module can be anything like procedure, function, etc. Unit testing is done by developers and testers together before the integration testing. They have to write unit test cases as well if needed.Developers write unit tests so they can repeatedly run them and check that no bugs have been introduced. If unit tests are slow, developers are more likely to skip running them on their own machines.
                    </p>
                </div>
            </div>
            <hr />
            <div class="collapse">
                <input type="checkbox" class="peer-checked:bg-accent peer" />
                <div class="collapse-title bg-yellow-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                        When a function is created in JavaScript, the JavaScript engine adds a prototype property to the function. This prototype property is an object (called a prototype object) that has a constructor property by default. The constructor property points back to the function on which prototype object is a property.
                    </p>
                </div>
            </div>


            <div class="collapse">
                <input type="checkbox" class="peer-checked:bg-accent peer" />
                <div class="collapse-title bg-violet-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p>One should never update the state directly because of the following reasons:

                        If you update it directly, calling the setState() afterward may just replace the update you made.
                        When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
                        You will lose control of the state across all components.

                    </p>
                </div>
            </div>

            <div class="collapse">
                <input type="checkbox" class="peer-checked:bg-accent peer" />
                <div class="collapse-title bg-yellow-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                    <div class="collapse">
                        <input type="checkbox" class="peer-checked:bg-accent peer" />
                        <div class="collapse-title bg-yellow-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                            What are the different ways to manage a state in a React application?
                        </div>
                        <div class="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                            <p>React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings.React's useState is the best option for local state management. If you need a global state solution, the most popular ones are Redux, MobX, and built-in Context API. Redux allows you to manage your app's state in a single place and keep changes in your app more predictable and traceable. It makes occurring changes in your app easier to figure out.Recoil seems to be the newest tool on the state management community— A community with tons of excellent libraries like Context, Mobx, and Redux, etc.Using useContext together with useReducer takes the component co-located state management on another level.
                            </p>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Blogs;