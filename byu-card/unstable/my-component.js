(function (template) {
    'use strict';

    class ByuCard extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.innerHTML = template;
		}

    }

    window.customElements.define('byu-card', ByuCard);
    window.ByuCard = ByuCard;

})(`<style>:host {
  display: inline-block;
  background-color: #fff;
  padding: 15px;
  -moz-box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  vertical-align: top; }

:host[columns='2'] .card {
  min-width: 250px;
  width: 45%;
  margin: 15px 2.5%; }

:host[columns='3'] .card {
  min-width: 250px;
  width: 30%;
  margin: 15px 2%; }

:host[columns='4'] .card {
  min-width: 250px;
  width: 23%;
  margin: 15px 1%; }

@media screen and (max-width: 1024px) {
  :host[columns='2'] .card, :host[columns='3'] .card, :host[columns='4'] .card {
    width: 90%;
    max-width: 400px; } }

:host.picture-left #inner-top .profile-image {
  order: 1; }

:host[theme=blue] .profile-image {
  background: #002E5D; }

:host[theme=gray] .profile-image {
  background: gray; }

#card-content::slotted(*) {
  color: #444; }
</style>

<div>My Custom Card Component</div>


<!-- Use the id "title" for title -->

<div class="card">

		<slot id="card-content">
		</slot>

</div>






`);