import React from 'react';

const Blogs = () => {
    return (
        <div>
         <div className='context'>
                <h2>API Context:</h2>
                <p>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.
                It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
                </p>   
            </div>
   
          <div className='semantic'>
            <h2> Semantic Tag:</h2>
            <p >
            Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.By adding semantic tags to our document, we provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and it makes web pages more informative and adaptable, allowing browsers and search engines to better interpret conten.
            </p>   
          </div> 

           <div className='semantic'>
            <h2> Semantic Tag:</h2>
            <p >
            Semantic HTML refers to syntax that makes the HTML more comprehensible by better defining the different sections and layout of web pages.By adding semantic tags to our document, we provide additional information about that document, which aids in communication. Specifically, semantic tags make it clear to the browser what the meaning of a page and it makes web pages more informative and adaptable, allowing browsers and search engines to better interpret conten.
            </p>   
          </div>     
        </div>
    );
};

export default Blogs;