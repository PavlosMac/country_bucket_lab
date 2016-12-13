
var CountryView = function() {
  // this.favouriteCountries = [];
};

CountryView.prototype = {

  main: function (countries) {
      this.populateSelect(countries);
      // var selected = countries[0];
      if(cached) {
          selected = JSON.parse(cached);
          document.querySelector('#countries').selectedIndex = selected.index;

      }

  },

  populateSelect: function(countries) {
       var parent = document.querySelector('#countries');
      countries.forEach(function (item, index) {
          item.index = index;
          var option = document.createElement("option");
          option.value = index.toString();
          option.text = item.name;
          parent.appendChild(option);
      });

      parent.addEventListener('change', function(event) {
          console.log(event.target)
          var index = this.value;
          var country = countries[index];
          console.log(country);
          addCountry(country);
          // console.log( this.favouriteCountries[0] )
      });
  }

    // addCountry: function(country){
    //   this.favouriteCountries.push(country);
    // };
}


module.exports = CountryView;





























  //   var form = document.getElementById('add-country')
  //   form.onsubmit = function(e){
  //     e.preventDefault();
  //
  //     var account = {
  //       owner: e.target.owner.value,
  //       amount: parseFloat(e.target.amount.value),
  //       type: e.target.type.value
  //
  //     }
  //     console.log(account);
  //     this.bank.addAccount(new Account(account));
  //     this.render();
  //     this.saveAccount(account);
  //   }.bind(this);
  //
  //   var interestButton = document.getElementById('interest-button');
  //   interestButton.onclick = function() {
  //     this.bank.payInterest(10);
  //     this.render();
  //   }.bind(this);
  // },
  //
  // saveAccount: function(account){
  //   var url = "http://localhost:3000/accounts";
  //   var request = new XMLHttpRequest();
  //   request.open("POST", url);
  //   request.setRequestHeader("Content-Type", "application/json");
  //
  //   request.onload = function(){
  //     if(request.status == 200){
  //       console.log("Account added");
  //     }
  //   }
  //   request.send(JSON.stringify(account))
  // },
  //
  // render: function() {
  //   var totalDisplay = document.getElementById('total');
  //   var businessTotalDisplay = document.getElementById('business-total');
  //   var personalTotalDisplay = document.getElementById('personal-total');
  //
  //   totalDisplay.innerText = "Total: £" + this.bank.totalCash().toFixed(2);
  //   businessTotalDisplay.innerText = "Total Business: £" + this.bank.totalCash('business').toFixed(2);
  //   personalTotalDisplay.innerText = "Total Personal: £" + this.bank.totalCash('personal').toFixed(2);
  //
  //   var businessAccountList = document.getElementById('business-accounts');
  //   var personalAccountList = document.getElementById('personal-accounts');
  //
  //   businessAccountList.innerHTML = "";
  //   personalAccountList.innerHTML = "";
  //
  //   this.populateAccountList(businessAccountList, this.bank.filteredAccounts('business'));
  //   this.populateAccountList(personalAccountList, this.bank.filteredAccounts('personal'));
  // },
  //
  // createItemForAccount:function(account) {
  //   var accountListItem = document.createElement('li');
  //   accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
  //   return accountListItem;
  // },
  //
  // populateAccountList:function(listElement, accounts) {
  //   for(account of accounts) {
  //     listElement.appendChild(this.createItemForAccount(account));
  //   }
  // }
// };

module.exports = CountryView;
