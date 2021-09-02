# Voicemod

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Front-end Tech Challenge

Context:
You have a client who has a real-time voice changer that has multiple presets (voices) to define how
your voice will be when you are using it. Your task is to create a selector-view to manage all these
different presets.

Task:
As a client,
I want a web-application that allows me to manage all my app-voices
So I can be able to have voices favourites, filter, select, search, sort, etc.
What do you have to do:

    ● Create HTML , CSS and JS needed to match the given designs
    ● HTML and CSS have to be responsive (there are no designs for the mobile version, feel free to
        do it as you want)
    ● Create all the features mentioned above:
        ○ Select a Voice
            ■ As we are changing our voice, only one will be selected at the same time
            ■ Voice-item will be selected in both sections (All and Favourite)
        ○ Favourite voice-items will appear at favourites section
            ■ Add to Favourites : clicking on the heart icon will add the Voice to the
            Favourites' list. On hover state, in both blocks (Favourites and All Voices), the
            favourites icon will have the selected status as active.
            ■ Remove from Favourites : clicking again on the heart icon of a Favourite
                Voice will remove that Voice from the favourites list.
        ○ All the header elements should work and allow you to filter the loaded data provided.
        Features:
            ■ Search by Voice name
            ■ Filter by Voice category ( tags )
            ■ Sort by Ascending or Descending using the Voice name
            ■ The random button will select a random voice from the actual voices list (filtered or not).

## Explanation

I've buid this simple app with 3 main components: VoiceFiltersComponent, VoiceListComponent and VoiceFavoritesComponent.

Another smart component as an orchestrating (VoicemodComponent) component that pass the info to these dumb components through Inputs and receives events through Outputs. This way only the orchestrator knows how and what to do with the data, state, etc through the facade service (VoiceFacadeService). This way the app is highly scalable and extensible.

I've also create the state of the app (VoiceStateService) that stores the filtered voices, selected voice, favorites, tags, sort mode... which are the source of truth (store). 

The app is responsive showing the favorites below the list and this occupying the whole width, also the filters strech when mobile.

I've used Scss for the styling and added some animations with animate.css lib

It lacks unit testing with jest or testing library, but this is out of this practice.

Hope you like it.

Watch it at <https://xavierclotet.github.io/voicemod/tree>!

## changelog

  ● upgraded tslint to eslint `https://github.com/angular-eslint/angular-eslint`
  ● upgraded to angular 12
