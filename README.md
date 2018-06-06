## A simple crud with react and react material

# ionic-utils
A ionic provider to easier your life, wrap Ionic components to write less code.

# Ionic Components

* AlertController

* LoadingController



# install

```sh
npm i ionic-utils --save
```

# Module

```javascript
import { UtilsProvider } from 'ionic-utils';
@NgModule({
  providers: [
    UtilsProvider,
  ],
})
```

# Methods <a name="methods"></a>

* [.makeAlert(title, message)


* [.makeLoading(message)
    

## .makeAlert(title, message)

Returns a alert to information something to the users

#### Parameters

- __title__: The title for the alert.

- __message__: The message for the alert.

## .makeLoading(message)

Display a loading indicator to show the users something are loading

#### Parameters

- __message__: The message for the loading indicator.