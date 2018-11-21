import { AngularFirestore, DocumentSnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { firestore } from 'firebase';

@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.page.html',
  styleUrls: ['./videochat.page.scss'],
})
export class VideochatPage implements OnInit {
  const webrtc;

  yourID = 0;

  videoSource: MediaStream;

  constructor(private fireStore: AngularFirestore) { }


  ngOnInit() {
    this.webrtc = this.fireStore.collection('webrtc');
    this.yourID = Math.floor(Math.random() * 1000000000);

    const servers = {
      'iceServers': [{ 'urls': 'stun:stun.services.mozilla.com' },
      { 'urls': 'stun:stun.l.google.com:19302' }]
    };
    const pc = new RTCPeerConnection(servers);
    pc.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
      if (event.candidate) {
        this.sendMessage(this.yourID, JSON.stringify({
          'ice': event.candidate
        }));
      } else {
        console.log('Sent all Ice');
      }
    };

    pc.ontrack = (event => this.videoSource = event.streams[0]);
  }

  sendMessage(senderId, data) {
    this.fireStore.collection('webrtc').add({
      sender: senderId,
      message: data
    }).then(docRef => {
      docRef.delete();
    });
  }

  readMessage(snapshot) {
    snapshot.docChanges().array.forEach(change => {
      if (change.type === 'added') {
        const data = change.doc.data();
        const msg = JSON.parse(data.message);
        const sender = data.sender;
        if (sender !== this.yourID) {
          if (msg.ice !== undefined) {
          }
        }
      }
    });
  }

}
/*

var webrtc = firebase.firestore().collection("webrtc");
var yourVideo = document.getElementById("yourVideo");
var friendsVideo = document.getElementById("friendsVideo");
var yourId = Math.floor(Math.random()*1000000000);
//Create an account on Viagenie (http://numb.viagenie.ca/), 
and replace {'urls': 'turn:numb.viagenie.ca','credential': 'websitebeaver','username': 
'websitebeaver@email.com'} with the information from your account
var servers = {'iceServers': [{'urls': 'stun:stun.services.mozilla.com'}, {'urls': 'stun:stun.l.google.com:19302'}]};
var pc = new RTCPeerConnection(servers);
pc.onicecandidate = (event => event.candidate?sendMessage(yourId, JSON.stringify({'ice': event.candidate})):console.log("Sent All Ice") );
pc.ontrack = (event => friendsVideo.srcObject = event.streams[0]);

function sendMessage(senderId, data) {
  webrtc.add({ sender: senderId, message: data }).then(docRef => {docRef.delete()})
}

function readMessage(snapshot) {
  snapshot.docChanges().forEach(change => {
    if (change.type === "added") {
      let data = change.doc.data()
      var msg = JSON.parse(data.message);
      var sender = data.sender;
      if (sender != yourId) {
	if (msg.ice != undefined) {
	  pc.addIceCandidate(new RTCIceCandidate(msg.ice));
	  console.log("Added candidage", msg.ice)
	} else if (msg.sdp.type == "offer") {
	  pc.setRemoteDescription(new RTCSessionDescription(msg.sdp))
	    .then(() => pc.createAnswer())
	    .then(answer => pc.setLocalDescription(answer))
	    .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})));
	  console.log("Got offer", msg.sdp)
	} else if (msg.sdp.type == "answer") {
	  pc.setRemoteDescription(new RTCSessionDescription(msg.sdp));
	  console.log("Got answer", msg.sdp)
	}
      }
    }
  })
};

webrtc.onSnapshot(readMessage);

function showMyFace() {
  navigator.mediaDevices.getUserMedia({audio:true, video:true})
    .then(stream => yourVideo.srcObject = stream)
    .then(stream => pc.addStream(stream));
}

function showFriendsFace() {
  pc.createOffer()
    .then(offer => pc.setLocalDescription(offer) )
    .then(() => sendMessage(yourId, JSON.stringify({'sdp': pc.localDescription})) );
} */

}
