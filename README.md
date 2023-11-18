# todin-main
```
app
│
├── core
│     ├── auth
│     │     ├── component
│     │     │	  └── login
│     │     │		 ├── login.component.html   
│     │     │		 ├── login.component.css
│     │     │		 └── login.component.ts
│     │     │ 
│     │     ├── models
│     │     │	  ├── login-credentials.model.ts 
│     │     │	  └── user-token.model.ts	
│     │     │ 	          
│     │     └── services
│     │		  └── login.service.ts		
│     │
│     ├── components
│     │	    └── not-found
│     │		    ├── not-found.component.html
│     │		    ├── not-found.component.css
│     │		    └── not-found.component.ts   
│     │
│     ├── guards
│     │	     ├── auth.guard.ts
│     │	     └── roles.guard.ts      
│     │
│     └── interceptors      
│              └── request.interceptor.ts     
│
├── modules    
│     └── tasks
│           ├── components 
│           │       ├── create-task
│	          │       │          ├── create-task.component.css
│	          │	      │	         ├── create-task.component.html
│	          │	      │          └── create-task.component.ts
│	          │       │          
│           │       └── list-task 
│           │	             ├── list-task.component.css
│	          │		           ├── list-task.component.html
│	          │		           └── list-task.component.ts
│           │
│           ├── models
│	          │	   └── task.model.ts
│           │ 
│           ├── services
│           │	   └── task.service.ts 
│	          │ 
│           ├── tasks-routing.module.ts
│           └── tasks.module.ts
│
├── shared
│      └── components
│              └── header
│		           ├── header.component.css          
│		           ├── header.component.html	   
│		           └── header.component.ts	
│
├── app-routing.module.ts
├── app.component.css
├── app.component.html
├── app.component.ts

```


└── app.module.ts
