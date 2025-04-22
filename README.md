# ngrx-task-crud-angular19
A CRUD app built with Angular v19 showcasing state management using NgRx Signals. Features include Add/Edit/Delete/List tasks (in-memory), reactive forms, signal-based selectors, dynamic chart updates, and modular standalone components. Ideal for learning modern Angular + NgRx

# How did you organize the modules and your signal store?
I kept it simple by breaking down the app into Statemanagement Folder,
 so everything related to tasks actions, reducers, selectors,store stays in one place It keeps 
 things clean and manageable, especially as the app grows. As for the store, I used NgRx for global state, 
 which keeps the logic separate and the app more scalable.

# Why did you choose certain patterns (e.g. signalEffect, computedSignal)?
I didn't use signals like in Vue or Solid, but NgRx selectors kinda work in a similar way
I needed a way to get state updates reactively, so I went with selectors to compute derived data, like task counts 
and status distribution It gives the reactivity without complicating things too much

# Any trade-offs or alternative approaches you considered?
NgRx is great but a bit heavy for small apps—lots of boilerplate.I did consider
 just using a service with BehaviorSubject for simplicity.
But for long-term scaling and team familiarity, NgRx felt like the safer bet