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

            <div class="collapse">
                <input type="checkbox" class="peer-checked:bg-accent peer" />
                <div class="collapse-title bg-yellow-200 text-primary-content peer-checked:bg-yellow-200  peer-checked:text-secondary-content">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content bg-primary text-primary-content peer-checked:bg-primary peer-checked:text-secondary-content">
                    <p>To optimize React rendering, you need to make sure that components receive only necessary props. It will let you control the CPU consumption and avoid over-rendering unnecessary features. The solution is to create a functional component that will collect all props and redistribute them to other components.Always render hidden components like Modals and Dropdowns conditionallyAvoid inline functions as much as possible.Keeping component state local where necessary.</p>
                </div>
            </div>



        </div>
    );
};

export default Blogs;