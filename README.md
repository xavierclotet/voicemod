# Voicemod

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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