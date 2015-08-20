var _pickList;

Template.pickListsList.onCreated(function() {
    this._pickListOptions = {
        selectedPickListId: ReactiveVar()
    };
    _pickList = this._pickListOptions;

    this.subscribe("allPickLists");
    this.subscribe("allPickListItems");
});

Template.pickListsList.helpers({
    pickLists: function () {
        return PickLists.find();
    },
    isPickListSelected: function() {
        var _activeStatus = "";
        if (_pickList.selectedPickListId.get() === this._id) {
            _activeStatus = "active";
        }
        return _activeStatus;
    },
    pickListItems: function () {
        return PickListItems.find({pickListId: _pickList.selectedPickListId.get()});
    }
});

Template.pickListsList.events({
    "click .pickListBtn": function () {
        _pickList.selectedPickListId.set(this._id);
    }
});