(function(window, undefined) {
  var dictionary = {
    "00b3ade0-a783-47e8-b522-3c4421ebde62": "Place to go",
    "75882ff9-6d58-403d-9470-e9dd04317f55": "Transportation",
    "c7fba75c-174f-4bbd-a272-508067a5dad4": "About ",
    "80d95c7f-140c-427d-b6ba-ec73d4fbce8c": "Sightseeing",
    "9b4dcd58-4e79-4e11-b516-66f520276314": "Entertainment",
    "3c474b8e-5bad-48d1-8bab-c89ccbbeb977": "Place to stay",
    "248f159c-0773-4551-bb06-6798315641f0": "Grocery",
    "5c33aed6-fe89-437d-85af-1083cb7ca639": "Lodging",
    "0e534309-21fc-4b53-8087-cdce49b24733": "Restaurant",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Homepage",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);