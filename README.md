Blockchain Setup:

Begin by downloading Ganache from here. Ganache will serve as a local blockchain node, providing trial accounts pre-funded with ether. It's important to note that actual transactions on a blockchain incur gas fees, paid in ether, which translates to real money.

To develop smart contracts, utilize Remix IDE (https://remix.ethereum.org/), which supports Solidity programming language.

Install the Web3 Python library using the command "pip install web3" in your terminal or command line. This library facilitates communication between our smart contracts and Flask backend.

Frontend Setup:

Utilize "npm install" to install all necessary dependencies.

Start the localhost server by running "npm start" in your terminal.

Backend Setup:

Set up a virtual environment on your system using "py -m venv env" on Windows or "python3 -m venv env" on Linux/MacOS.

Activate the virtual environment using ".\env\Scripts\activate" on Windows or "source env/bin/activate" on Linux/MacOS.

Install Flask and Flask-SQLAlchemy by running "pip install flask flask-sqlalchemy".

Finally, start the backend server by running "python app.py" in your terminal from the root directory. Ensure that the frontend server is also running simultaneously by executing "npm start" in another terminal.
