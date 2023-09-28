## Installation
- To run the project at first run:
`npm install`
- Then you can run the development server by:
	`npm run start:dev`
	*by default it runs on port 4002* 
- You can build the project by:
	`npm run build`
- You have to create `uploads` folder in root directory.

## Endpoints
- Upload docs:
	- For now it only support image upload
	- /upload
		- Request
			- type: `POST`
			- fieldname: `anything you want`
			- support multiple: `yes`
		- Response
			- message: `a success message after image/images got saved`
			- files: 	`an array of filename`
- Get docs:
- /getdocs/:filename
	 - Request
		 - type: `get`
		 - filename: `name of file that you want to get`
		 - support multiple: `no`
	- Response:
		- requested image iff it present
- Delete docs:
- /getdocs/:filename
	 - Request
		 - type: `delete`
	- Response:
		- requested image iff it present