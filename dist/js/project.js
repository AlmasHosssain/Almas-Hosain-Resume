const preview = (() => {
   const $ = (container) => {
      return document.querySelector(container)
   }

   let previewArray = [{
         id: 0,
         title: "Money Management App",
         body: "This is a money management app and it is a full stack project.Which is created by using React for view layer, Redux for data layer, NodeJS as backend, passport for authentication and JsonWebToken for creating Bearer token service .Here a user can create his/her account.Can perform his/her transactions and can see the effect of transaction on the frontend.The transaction is also change the database value.User can update an delete the transactions only if they are authorized.User must be login to access the account and can do logout if they want.And many more"
      },
      {
         id: 1,
         title: "Resort World",
         body: "This is a dynamic website for resort viewing.It was build by using a lot of reuse able code. Use React for view layer,React Hook,React Context API for providing data on the various component and page.There ar no need to write any code here to update,add,delete any features or component.Just write a json file to held those operations.There is a ooooowsome filtering section present here."
      },
      {
         id: 2,
         title: "Phone Market",
         body: "It's a full stack E-Commerce project. I use react for the frontend,react context API for providing data and NodeJs for the backend. A user can buy his selected product from here,they can update the number of products and it's effect reflect on the database also "
      },
      {
         id: 3,
         title: "File Upload System",
         body: "It is a file upload system which is developed by using NodeJS"
      },
      {
         id: 4,
         title: "Poll System",
         body: "It is a poll create software. Which is created by using NodeJS. In here view engine use for the frontend and NodeJS for the backend"
      },
      {
         id: 5,
         title: "REST API",
         body: "Here I develop a completely successful REST API for a registration and login process using NodeJS"
      },
      {
         id: 6,
         title: "Website for ICT department",
         body: "This is the proposed website for the department of Information & Communication Technology.I design and develop it using Vanilla JS,HTML5,CSS3 and BOOTSTRAP"
      },
      {
         id: 7,
         title: "Gun Firing Game",
         body: "Well! It is gun shuting game. I developed this game using JavaScript from my curiosity."
      },
      {
         id: 8,
         title: "E-Commerce",
         body: "Here I design a simple E-Commerce using HTML5,CSS3 and Vanilla JS.It is fully responsive website"

      }
      
   ]

   let previewContainer = $('.preview-container');
   let previewSelectors = document.querySelectorAll('.preview');
   let close = $('.preview-close');
   let title = $('.title');
   let body = $('.body');
   let boxList = document.querySelectorAll('.projects__btns');
   let boxArray = []

   close.addEventListener('click', (event) => {
      event.preventDefault();
      previewContainer.classList.remove('show')
   })

   previewSelectors.forEach((previewSelector) => {
      boxArray.push(previewSelector);
      previewSelector.addEventListener('click', (event) => {
         if (event.target.classList.contains('preview')) {
            previewContainer.classList.add('show')
            let getValue = boxArray.indexOf(event.target)
            if (getValue === previewArray[getValue].id) {
               title.textContent = previewArray[getValue].title;
               body.textContent = previewArray[getValue].body;
            }
         }

      })
   })

})()
