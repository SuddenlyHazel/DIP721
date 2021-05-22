import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as DIP721_idl, canisterId as DIP721_id } from 'dfx-generated/DIP721';

const agent = new HttpAgent();
const DIP721 = Actor.createActor(DIP721_idl, { agent, canisterId: DIP721_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await DIP721.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
