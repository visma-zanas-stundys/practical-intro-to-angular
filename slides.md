---
theme: ./theme
background: /images/cover-start.gif
background-position-x: 200%
highlighter: shiki
hideInToc: true
title: Day 1
---

# Day 1

## Practical introduction to Angular


---
hideInToc: true
---

# Agenda

<Scroller>
    <Toc />
</Scroller>

---
layout: two-cols
---

# What is Angular?

Angular is a platform that makes it easy to build applications with the web. 

- Declarative templates
- Dependency injection
- End to end tooling
- Integrated best practices

::right::

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" />

---
layout: two-cols
---

# What is Typescript?

Typescript is a superset of Javascript.

- Expands the language of Javascript with types, enums, decorators and more
- TypeScript is used together with Angular
- [Typescript Playground](https://www.typescriptlang.org/play)

::right::

<img src="https://mblogthumb-phinf.pstatic.net/MjAxOTA5MThfMjUz/MDAxNTY4Nzc1NjcwODU4.xFOImjrZShTTuPsRzemtz1FI-RCuruHnMEEGZL3BOEUg.ZQ0MifFlaaGRKn6bmbFCsujHt2kC2V1wQv0hmigWuO4g.PNG.bluesky4381/TypeScript_JavaScript.png?type=w800" />


---
hideInToc: true
---

# Typescript example

```ts {1|3-8|10-14|16-19|21-24|all}
const myLanguage: 'js' | 'ts' = 'ts';

enum CodingSkill {
  Junior,    // 0
  Mid,       // 1
  Senior,    // 2
  Macaronni, // 3
}

interface Candidate {
  name: string;
  skill: CodingSkill;
  language: 'js' | 'ts';
}

const developer: Candidate {
  name: 'John Doe',
  skill: CodingSkill.Advanced,
  language: 'ts'
}

function evaluateCandidate(someCandidate: Candidate): boolean { ... };
```

---

# Workshop #1 - Creating an Angular project


<div grid="~ cols-2 gap-4">
<div>

0. Make sure you have NodeJS installed on your system:

    ```sh
    $ node -v
    ```

1. After NodeJS is installed in the system, install Angular CLI with:

    ```sh
    $ npm install -g @angular/cli
    ```

2. Create a new project with `ng new <project-name>`

    ```sh
    $ ng new workshop-project-1 # Creates an Angular project
    $ cd workshop-project-1 # Open the project directory
    $ ng serve # Serves the application
    ```

</div>
<div>
 
3. Add a bootstrap CSS library to the `index.html` file.  
   https://getbootstrap.com/docs/5.1/getting-started/introduction/

4. Use Google Fonts to add a custom font to the `index.html` file (weights 400, 700).
   https://fonts.google.com/

5. Change the default font-family used in `styles.css` file:

    ```css
    :root {
        --bs-font-sans-serif: 'YOUR FONT HERE', sans-serif;
    }
    ```

 
</div>
</div>

---
hideInToc: true
---

# Workshop #1 - Creating an Angular project

Commmon commands of the Angular CLI

- `ng serve` Hosts the project code for development on `http://localhost:4200`
- `ng build` Builds the project code for production
- `ng lint` Checks for code style errors
- `ng test` Runs tests contained in the project
- `ng generate` Generate code for building blocks)
  ```sh
  ng generate component product-card
  ```


---

# Project structure

```
- src/index.html
- src/styles.css
- src/main.ts
- src/assets/*
- src/environments/*
- package.json
- angular.json
- src/app/*
```

---
hideInToc: true
---

# Project structure - src/index.html

Contains the initial HTML code of the application.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>NgWorkshop</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

---
hideInToc: true
---

# Project structure - src/styles.css

Global styles of the application.

```css
/* You can add global styles to this file, and also import other style files */

body {
  font-family: 'Open Sans', sans-serif;
}
```


---
hideInToc: true
---

# Project structure - src/main.ts

Initializes the app by bootstrapping the AppModule

```ts {all|4|11-12|all|5-9}
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```


---
hideInToc: true
---

# Project structure - src/environments/environment.ts

Environment specific data can be placed inside (development vs production).

```ts
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
```


---
hideInToc: true
---

# Project structure - package.json

Metadata, dependencies and scripts of the project.

```json {all|4-11|12-16|17-21}
{
    "name": "ng-workshop",
    ...
    // Scripts to trigger various commands. For example: `npm run build`
    "scripts": {
        "serve": "ng serve",
        "build": "ng build",
        "lint": "ng lint",
        "test": "ng test",
        "e2e": "ng e2e"
    },
    "dependencies": {
        "@angular/**": "version number", // All Angular dependencies
        "rxjs": "version number", // Library to handle asynchronous data streams (remote data fetching, etc.)
        ...
    },
    "devDependencies": {
        "karma-*": "version number", // Test runner
        "jasmine-*": "version number", // Test assertion library
        ...
    }
}
```

---
hideInToc: true
---

# Project structure - angular.json

```ts {all|13|14-16|18-25|27-31|all}
{
  ...
  "defaultProject": "ng-workshop",
  "projects": {
    "ng-workshop": {
      ...
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/ng-workshop",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": { ... },
            "development": { ... }
          },
          "defaultConfiguration": "production"
        },
        "serve": { ... },
        "extract-i18n": { ... },
        "test": { ... }
      }
    }
  }
}
```

<style>
.shiki-container  {
  max-height: 400px;
  overflow: auto;
}
</style>

---
hideInToc: true
--- 

# Project structure - src/app folder


<div grid="~ cols-2 gap-4">
<div>

Majority of the application's logic will reside in the `src/app` folder.

By default Angular CLI adds: 
- `app.component`
- `app.module`

</div>
<div>


<img style="width: 300px;" src="/images/project-tree.png">

</div>
</div>

---
layout: center
class: text-center
hideInToc: true
---

# 10 minute break

<Countdown seconds="600" />

---


# Component based architecture

<img src="/images/component-architecture.png">

---

# Building blocks

```mermaid {scale: 0.95}
graph RL
A1[layout.component] --> A[(app.module)] 
B(products.module) --> |exports| A
B1[product-card.component] --> B
B2[product-list.component] --> B
S(shared.module) --> |exports| B
S --> |exports| C
S --> |exports| D
S1(card.component) --> S
S2(data-table.component) --> S
S3(auto-focus.directive) --> S
S4(fahrenheit-to-celsius.pipe) --> S
S5(trial-countdown.component) --> S
C(orders.module) --> |exports| A
D(account.module) --> |exports| A

classDef App fill:#e1bee7,stroke:black
classDef Feature1 fill:#ffe0b2,stroke:black
classDef Feature2 fill:#d7ccc8,stroke:black
classDef Feature3 fill:#cfd8dc,stroke:black
classDef Shared fill:#c8e6c9,stroke:black

class A,A1 App;
class B,B1,B2 Feature1;
class C Feature2;
class D Feature3;
class S,S1,S2,S3,S4,S5 Shared;
```

---
hideInToc: true
---

# Building blocks - @NgModule


<div grid="~ cols-2 gap-4">
<div>

Classes with decorators

- Modules (can be included in imports[] or exports[])
  - `@NgModule`

</div>

<div> 


```ts
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ...
  ],
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    ...
  ],
  providers: [ ProductsService, ... ],
  exports: [ ... ]
})
export class ProductsModule {}
```

</div>
</div>

<!--
Declares a compilation context for a set of components that is dedicated to an application domain, a workflow, or a closely related set of capabilities.
-->
 
---
hideInToc: true
---

# Building blocks - @Component


<div grid="~ cols-2 gap-4">
<div>

Classes with decorators

- Modules (can be included in imports[] or exports[])
  - `@NgModule`
- Declarables (must be included in declarations[], optionally in exports[])
  - `@Component`

</div>

<div> 

```ts
@Component({
  selector: 'app-product-card',
  template: `
    <h4>{{ product.name }}</h4>
    <span [class.text-red]="product.isOnSale">
      {{ product.price | currency }}
    </span>
    <br/>
    <button type="button" (click)="onBuyClick()">Buy now!</button>
  `,
})
export class ProductCardComponent {
  @Input() product: Product;
}
```

```html
<app-product-card [product]="products[0]"></app-product-card>
```

</div>
</div>

<!--
Defines a class that contains application data and logic, and is associated with an HTML template that defines a view to be displayed in a target environment.
-->

---
hideInToc: true
---

# Building blocks - @Directive


<div grid="~ cols-2 gap-4">
<div>

Classes with decorators

- Modules (can be included in imports[] or exports[])
  - `@NgModule`
- Declarables (must be included in declarations[], optionally in exports[])
  - `@Component`
  - `@Directive`


</div>
<div>


```ts
@Directive({ selector: '[appButton]', })
export class ButtonDirective {
  @Input() variant: 'primary' | 'secondary';

  @HostBinding('attr.disabled')
  @Input()
  isLoading = false;
}
```

```html
<button appButton [isLoading]="true">Place order</button>
```

</div>
</div>


---
hideInToc: true
---

# Building blocks - @Pipe


<div grid="~ cols-2 gap-4">
<div>

Classes with decorators

- Modules (can be included in imports[] or exports[])
  - `@NgModule`
- Declarables (must be included in declarations[], optionally in exports[])
  - `@Component`
  - `@Directive`
  - `@Pipe`


</div>
<div>

```ts
@Pipe({ name: 'likeEmoji', })
export class LikeEmojiPipe implements PipeTransform {
  transform(value: boolean): '👍' | '👎' {
    return value ? '👍' : '👎';
  }
}
```

```html
<div>{{ product.reviewScore > 5 | likeEmoji }}</div>
```

</div>
</div>

---
hideInToc: true
---
 
# Building blocks - @Injectable


<div grid="~ cols-2 gap-4">
<div>

Classes with decorators

- Modules (can be included in imports[] or exports[])
  - `@NgModule`
- Declarables (must be included in declarations[], optionally in exports[])
  - `@Component`
  - `@Directive`
  - `@Pipe`
- Injectables (can be included in providers[])
  - `@Injectable` (services, guards, interceptors, resolvers, etc...)


</div>
<div>

```ts
@Injectable({ providedIn: 'root', })
export class ProductsService {
  getAllProducts() {
    return [
      { id: 1, name: 'Nike Shoes', price: 1000 },
      { id: 2, name: 'Adidas Pants', price: 2000 },
    ];
  }
}
```

```ts
@Component({
  template: `
    Total products: {{ products.length }}<br/>

    <app-product-card
      *ngFor="let product of products"
      [product]="product
    ></app-product-card>`
})
export class ListComponent {
  products: Product[] = this.productsService.getAllProducts();

  constructor(private productsService: ProductsService) {} 
}
```
 
</div>
</div>

<!--
A service class definition is immediately preceded by the @Injectable() decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.
 -->

---

# Things to know about components

- Template syntax
- Property/Method decorators (`@Input`, `@Output`)
- Built-in directives (`*ngIf`, `*ngFor`)
- Lifecycle hooks (`ngOnInit`, `ngOnDestroy`)
- Styling/Encapsulation
- Content projection
- Change detection
 
---
layout: center
hideInToc: true
---
 
# Template syntax

---
title: Sandbox / Template syntax
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-lqd9ao?file=src/app/app.component.html
preload: false
hideInToc: true
---

---
hideInToc: true
---

# Template syntax

<section class="grid grid-cols-2 gap-4">

  ```html
  <input [value]="firstName">
  ```

  Binds property `value` to the result of expression `firstName`.

</section>

<section class="grid grid-cols-2 gap-4">

  ```html
  <div [attr.role]="myAriaRole">...</div>
  ```

  Binds attribute `role` to the result of expression `myAriaRole`.

</section>


<section class="grid grid-cols-2 gap-4">

  ```html
  <div [class.extra-sparkle]="isDelightful">...</div>
  ```

  Binds the presence of the CSS class `extra-sparkle` on the element to the truthiness of the expression `isDelightful`.

</section>

<section class="grid grid-cols-2 gap-4">

  ```html
  <div [style.width.px]="200">...</div>
  ```

  Binds style property width to the result of expression 200 in pixels. Units are optional.

</section>

---
hideInToc: true
---

# Template syntax

<section class="grid grid-cols-2 gap-4">

  ```html
  <button (click)="readRainbow($event)">...</button>
  ```
  
  Calls method `readRainbow` when a `click` event is triggered on this `<button>` element (or its children) and passes in the event object.
</section>


<section class="grid grid-cols-2 gap-4">

  ```html
  <div title="Hello {{ponyName}}">...</div>
  ```

  Binds a property to an interpolated string, for example,
  "Hello Seabiscuit". Equivalent to: `<div [title]="'Hello ' + ponyName">...</div>`

</section>

<section class="grid grid-cols-2 gap-4">

  ```html
  <p>Hello {{ponyName}}</p>
  ```

  Binds text content to an interpolated string, for example, "Hello Seabiscuit".
</section>

<section class="grid grid-cols-2 gap-4">

  ```html
  <app-component [(value)]="name">...</app-component>
  ```

  Sets up two-way data binding. Equivalent to:  
  `<app-component [value]="name" (value)="name = $event">...</app-component>`

</section>

---
hideInToc: true
---

# Template syntax


<section class="grid grid-cols-2 gap-4">

  ```html
  <video #videoRef ...></video>
  <button (click)="videoRef.play()">Play</button>
  ```

  Creates a local variable `videoRef` that provides access to the `<video>` element instance in data-binding and event-binding expressions in the current template.

</section>


<section class="grid grid-cols-2 gap-4">

  ```html
  <p>Card No.: {{ cardNumber | formatCardNumber }}</p>
  ```

  Transforms the current value of expression `cardNumber` via the pipe called `formatCardNumber`.

</section>


<section class="grid grid-cols-2 gap-4">

  ```html
  <p>Employer: {{ employer?.companyName }}</p>
  ```

  The optional chaining operator (?) means that the `employer` field can be `undefined`. If that's the case, the rest of the expression is handled without any errors.

</section>


---
hideInToc: true
---

# Template syntax

<section class="grid grid-cols-2 gap-4">

  ```html
  <p *myUnless="myExpression">...</p>
  ```

  <div>

  The `*` symbol turns the current element into an embedded template. Equivalent to: 

  ```html
  <ng-template [myUnless]="myExpression">
    <p>...</p>
  </ng-template>
  ```

  </div>
</section>

---
layout: center
hideInToc: true
---

# Property/Method decorators

---
title: Sandbox / Property & Method decorators
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-ncwwfc?file=src/app/fruit.component.ts
preload: false
hideInToc: true
---

---
hideInToc: true
---

# Property/Method decorators - @Input()

Allows a property to be passed to a component.


```ts
@Component({
    template: `Name: {{ name }}, Email: {{ email }}`
})
export class AccountCardComponent {
    @Input() name: string;
    @Input() email: string;
}
```

Usage

```html
<app-account-card name="John Doe" email="email@example.com"></app-account-card>
```

---
hideInToc: true
---

# Property/Method decorators - @Output()

Used together with `new EventEmitter()` to fire events from a component.


```ts
@Component({
    template: `
        <ng-content></ng-content>
        <button (click)="answer.emit(false)">No</button>
        <button (click)="answer.emit(true)">Yes</button>
    `
})
export class QuestionComponent {
    @Output() answer = new EventEmitter<boolean>();
}
```

Usage

```html
<app-question (answer)="checkAnswer($event)">
    <p>Do you like melons?</p>
</app-question>
```

```ts
checkAnswer(answer: boolean) { ... }
```

---
hideInToc: true
---

# Property/Method decorators - @HostListener()

Allows to listen for events on the host element.

```ts
@Component({
    selector: 'app-order'
})
export class OrderComponent {
    @HostListener('click', ['$event'])
    onClick(event: MouseEvent) {
        // Clicked on <app-order> element
    }
}
```

---
hideInToc: true
---

# Property/Method decorators - @HostBinding()

Allows to set attributes on the host element

```ts
@Component({ selector: 'app-button' })
export class ButtonComponent {
    // Sets the role attribute on the host element
    // <app-button role="button">...</app-button>
    @HostBinding('role')
    readonly role = 'button';

    // Randomly assigns a width on the host element
    // <app-button style="width: 100px;">...</app-button>
    @HostBinding('style.width.px')
    get width(): number {
        return Math.random() > 0.5 ? 200 : 100;
    }

    // Adds `active` class on the host element if `active` property is true
    // <app-button [active]="true" class="active">...</app-button>
    @HostBinding('class.active')
    @Input()
    active = false;
}
```

---
hideInToc: true
---

# Property/Method decorators - @ViewChild()

Gets a reference to the component/element.

```ts
@Component({
  selector: 'app-account-card',
  template: `
      <p #paragraph>Name: {{ name }}</p>
  `,
})
export class AccountCard implements AfterViewInit {
  @Input() name: string;
  @ViewChild('paragraph')
  private paragraph: ElementRef<HTMLElement>;

  // After component is rendered
  ngAfterViewInit() {
    console.log(this.paragraph.nativeElement.innerHTML.length);
  }
}
```


---

# Workshop #2 / Creating a restaurant card

Branch: `workshop-2-start`

<section class="grid grid-cols-[1fr,auto] gap-4">

<div>

1. ```sh
    ng generate module restaurants --module app
    ```

3. ```sh
    ng generate component restaurants/restaurant-card --export
    ```
   
   Data for the restaurant can be hard-coded in the `.html` file

4.  ```html
    <!-- app.component.html -->
    <app-restaurant-card
      imageUrl="xxx.jpg"
      name="Jammi Kebabai"
      address="Stoties g. 22"
      [distanceInKm]="4.5"
      [rating]="7.5"
    ></app-restaurant-card>
    ```

    Update the component with @Input() to pass properties listed above.


</div>

<img style="width: 300px" src="/sketches/workshop-2.svg">

</section>


---
layout: center
class: text-center
hideInToc: true
---

# 15 minute break

<Countdown seconds="900" />

---
layout: center
class: text-center
---

# Built-in directives

Exported by CommonModule

---
title: Sandbox / Built-in directives
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-n2a9lv?embed=1&file=src/app/app.component.html
preload: false
hideInToc: true
---

---
hideInToc: true
---

# Built-in directives *ngIf

Displays given element if the expression is truthy.  
Accepts `else` to display a different template if expression is falsy.

```html
<ng-container *ngIf="isTrialOver; else daysLeftRef">
    Your trial has ended.
</ng-container>

<ng-template #daysLeftRef>
    Days left: {{ daysLeft }}
</ng-template>

```

---
hideInToc: true
---

# Built-in directives *ngFor

Allows to iterate over a collection of items and display them in the shared template.

```html
<ol>
    <li *ngFor="let task of tasks" [class.text-red]="task.isHighPriority">
        {{ task.title }} due: {{task.deadline}}
    </li>
</ol>
```

```ts
@Component(...)
export class TaskListComponent {
    tasks: Task[] = [
        { title: 'Task 1', deadline: '2020-01-01', isHighPriority: false },
        { title: 'Task 2', deadline: '2020-01-02', isHighPriority: true },
        { title: 'Task 3', deadline: '2020-01-03', isHighPriority: false },
    ];
}
```

---
hideInToc: true
---


# Built-in directives [ngSwitch], ngSwitchCase, ngSwitchDefault

Renders the template that matches the `ngSwitchCase`.  
If no match is found, displays the `ngSwitchDefault` template.

```html
<div [ngSwitch]="car.quality">
  <ng-template ngSwitchCase="new">The car is new and will be pricy</ng-template>
  <ng-template ngSwitchCase="used">The car is used</ng-template>
  <ng-template ngSwitchCase="broken">The car is not fit for driving</ng-template>
  <ng-template ngSwitchDefault>The car is fit for purchase</ng-template>
</div>
```

---
hideInToc: true
---

# Built-in directives [ngClass]

Applies classes if value is truthy.  
The right-hand expression should return `{ "class-name": true | false }`

```html
<div [ngClass]='{
    "text-bold": true,
    "text-green": car.price <= averageCarPrice
  }'>...</div>
```

---
hideInToc: true
---

# Built-in directives [ngStyle]

Applies style declarations to the expression result  
The right-hand expression should return `{ "declaration-name": ... }`

```html
<div [ngStyle]='{
    "font-size": "1.5em",
    "font-weight": "bold",
    "color": car.price > averageCarPrice ? "red" : "green"
  }'>...</div>
```

---

# Lifecycle hooks

After creating a component/directive by calling its constructor, Angular
calls the lifecycle hook methods in the following sequence at specific
moments:

```ts
export class AppComponent implements OnChanges, OnInit, OnDestroy, ... {
    // ! Common
    // ? Sometimes
    // - Rare

    constructor(...) { ... }                    // ! Called before any lifecycle hooks.
                                                //   Properties with @Input() are not yet set.

    ngOnChanges(changes: SimpleChanges) { ... } // ? Called after a bound input property changes & before first render
    ngOnInit() { ... }                          // ! Called before first render
    ngDoCheck() { ... }                         // - Called on every change detection run
    ngAfterContentInit() { ... }                // - Called after the content passed to the component has been initialized,
                                                //   but before the component template is fully rendered
    ngAfterContentChecked() { ... }             // - 
    ngAfterViewInit() { ... }                   // ? Called after in the component DOM is rendered
    ngAfterViewChecked() { ... }                // -
    ngOnDestroy() { ... }                       // ! Called before component is destroyed
}
```

---

# Workshop #3 / List of restaurants

Use `*ngFor` directive to iterate over a collection of restaurants.  
Branch: `workshop-3-start`

<Scroller>

<img style="width: 600px; margin: auto;" src="/sketches/workshop-3.svg">


1. Create a `restaurant-list` component in the restaurants module.
2. The `restaurant-list` should accept an array of restaurants:
    ```ts
    // src/app/interfaces/restaurant.ts
    export interface Restaurant { id: number; discount?: string; ... }

    // src/app/restaurants/restaurant-list.component.ts
    @Input() restaurants: Restaurant[];
    ```

3. Use *ngFor directive to display the list of restaurants.
4. Use *ngIf directive in `restaurant-card` component if a discount is in effect (-20%, "Free shipping", etc).


</Scroller>


---
layout: center
class: text-center
hideInToc: true
---

# 15 minute break

<Countdown seconds="900" />

---


# Styling/Encapsulation

Encapsulated styles help to avoid component styles from "leaking out" to other parts of the app.

- Encapsulation, by default mangles the generated CSS class names.
- `:host` selector can be used to apply styles on the host element

```css
/* app.component.css */
:host {
    display: block;
}
```

- Use the `encapsulation` property in the `@Component()` decorator to change the behavior.

```ts
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    ...
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {}
```

Read more: https://angular.io/guide/view-encapsulation

---
preload: false
---

# Content projection

What if we want to add HTML content to the component? `<ng-content>` to the rescue!
 
<iframe style="width: 100%; height: 350px;" src="https://stackblitz.com/edit/angular-ivy-udezqd?file=src/app/app.component.html"></iframe>

Read more: https://angular.io/guide/content-projection

---

# Change detection

When Angular updates the HTML of the component

- Component is initialized
- Component properties change


- OnPush strategy as a performance optimization.  
    Although asynchronous code (setTimeout, HttpClient methods) will not trigger change detection.
    ```ts
    @Component({
        changeDetection: ChangeDetectionStrategy.OnPush
    })
    ```
- `ChangeDetectorRef.markForCheck` method can be used to trigger change detection manually.

    ```ts
    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.dataService.getData().subscribe((response) => {
            this.data = response;
            this.cd.markForCheck(); // Triggers change detection
        })
    }
    ```
 
---
title: Sandbox / Change detection
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-ynf7t9?file=src%2Fapp%2Fcountdown%2Fcountdown.component.ts
preload: false
hideInToc: true
---


---

# Pipes

Angular has a number of built in pipes. Most common are:

- **AsyncPipe** Unwraps a value from an asynchronous primitive, such as a Promise or Observable.
- **DatePipe** Formats a date value according to locale rules.
- **UpperCasePipe** Transforms text to all upper case.
- **LowerCasePipe** Transforms text to all lower case.
- **CurrencyPipe** Transforms a number to a currency string, formatted according to locale rules.
- **DecimalPipe** Transforms a number into a string with a decimal point, formatted according to locale rules.
- **PercentPipe** Transforms a number to a percentage string, formatted according to locale rules.

Usage:

```html
{{ 20.4 | currency }} <!-- $20.40 -->
{{ 20 | currency:'EUR':'1.1-2' }} <!-- €20.00 -->
```

Find out more on https://angular.io/guide/pipes

<!-- Pipes are useful -->

---
hideInToc: true 
---

# Creating your own pipes

- Pipe is a declarable, therefore needs to be added to the `declarations[]` in the containing module.
- If pipe is intended to be used in other modules, it will need to be added to `exports[]` as well.

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform {
    transform(degrees: number, target: 'c' | 'f'): number {
       return target === 'c' 
         ? Math.round((degrees - 32) * 5 / 9) + '°C' 
         : Math.round(degrees * 9 / 5 + 32)   + '°F'
    }
}
```

Usage

```html
100 degrees in celsius: {{ 100 | temperature: 'c' }} <!-- 38°C  -->
100 degrees in fahrenheit: {{ 100 | temperature: 'f' | lowercase }} <!-- 212°f -->
```

---
layout: center
class: text-center
---

# Services

---
hideInToc: true
---

# Creating a service class

Add a `@Injectable({ providedIn: 'root' })` decorator above the class

<div class="grid grid-cols-2">

<div>

- Usually responsible for business logic
- Accessed through dependency injection

    ```ts
    export class HeaderComponent {
        isLoggedIn = this.userService.checkIfUserIsLoggedIn();

        constructor(private userService: UserService) {}

        logout() { this.userService.logout() }
    }
    ```

</div>

<div>

- Services can inject other services too

    ```ts
    @Injectable({ providedIn: 'root' })
    export class UserService {
        // Import HttpClient service (provided by HttpClientModule)
        constructor(private httpClient: HttpClient) {}

        getUserDetails(userId: number): Observable<User> {
            return this.httpClient.get<User>(`/api/users/${userId}`);
        }
    }
    ```

</div>

</div>


Observables might be useful for reactive properties (that change over time).  
More about Observables [here](https://www.youtube.com/watch?v=65Us8NwmYf4)

---
title: Sandbox / Service class demo
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-7qn8cb?file=src/app/app.component.ts
preload: false
hideInToc: true
---

---

# Workshop #4 / Fetch data

Create a fake server to fetch remotely with `json-server`  
Branch: `workshop-4-start`

<Scroller>

1. Run `npm install json-server --save-dev`
2. Create a mock data file `mock-data.js` in the project root.
3. It should return mock data for the restaurants.
    ```js
    module.exports = () => {
        return {
            restaurants: [ ... ]
        }
    }
    ```
4. Create a script in `package.json`:
    ```json
    {
        "scripts": { 
            "server": "json-server mock-data.js --delay 1000"
        }
    }
5. Launch the server: `npm run server`
6. Create an api service `ng g service restaurants/restaurant-api`
7. Import `HttpClientModule` in `app.module.ts` from `@angular/common/http`
8. Inject `HttpClient` into `restaurant-api.service.ts`
9. Add a method that fetches the restaurants from the server

    ```ts
    @Injectable({ providedIn: 'root' })
    export class RestaurantApiService {
        constructor(private httpClient: HttpClient) {}

        getAll(): Observable<Restaurant[]> {
            return this.httpClient.get<Restaurant[]>('http://localhost:3000/restaurants');
        }
    }
    ```

10. Inject the api service in the `app.component.ts`

    ```ts
    export class AppComponent {
        restaurants$ = this.restaurantApi.getAll();
        
        constructor(private restaurantApi: RestaurantApiService) {}
    }
    ```

11. Use the `| async` pipe to display the data

    ```html
    <app-restaurant-list
      *ngIf="restaurants$ | async as restaurants; else loadingRef"
      [restaurants]="restaurants"
    ></app-restaurant-list>

    <ng-template #loadingRef>
        <output class="text-black-50">Loading...</output>    
    </ng-template>
    ```
</Scroller>

<style>
    .slidev-layout li {
        margin-left: 3ch;
    }
</style>

---
layout: center
class: text-center
hideInToc: true
---

# 10 minute break

<Countdown seconds="600" />

---

# Workshop #5 / Custom pipes

Custom pipes
Branch: `workshop-5-start`

1. Create a pipe `ng g pipe restaurants/pipes/stars`
2. It should transform a number 1-10 to star emojis
3. Used in the `restaurant-card` component should provide a result like so:

    ```html
    <!-- ⭐⭐⭐⭐⭐ if 10  -->
    <!-- ⭐ if <=2  -->
    {{ restaurant.rating | stars }}
    ```

---
layout: center
class: text-center
---

# Routing & Navigation

---
hideInToc: true
---

# RouterModule

The Angular Router enables navigation from one view to the next as users
perform application tasks.

<div class="grid grid-cols-2 gap-4">

<div>

- Part of @angular/router package
- Configured within RouterModule
- Projects components on router outlet

```ts
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantListComponent, resolve: { restaurants: RestaurantsResolver } },
    { path: 'settings', canActivate: [AdminGuard], loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
})
export class AppModule {}
```

</div>

```html
<!-- Use [routerLink] to add links to other routes -->
<!-- Use [routerLinkActive] to apply a class for the route link that is active -->
<a routerLinkActive="bold" routerLink="" [routerLinkActiveOptions]="{ exact: true }">Home</a>
<a routerLinkActive="bold" routerLink="restaurants">Restaurants</a>
<a routerLinkActive="bold" routerLink="settings">Settings</a>

<router-outlet></router-outlet>
<!-- Component for matched route will be rendered here  -->
```


</div>

---
hideInToc: true
---

# Router Guards

- `CanActivate`, `CanDeactivate`, `CanActivateChild`, `canLoad`, `Resolve`

<Scroller>

<div class="grid grid-cols-2 gap-4">

```ts
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot): UrlTree | boolean {
        return this.authService.isAdmin()
            ? true
            : this.router.createUrlTree(['/login']);
    }
}

// Usage in route definition

{
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuard, ...]
}
```


```ts
@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<User> {
    constructor(private authService: AuthService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.authService.getUserData()
    }
}
// Route definition
{
    path: 'user',
    component: UserPageComponent,
    resolve: { user: UserResolver }
}
// user-page.component.ts
@Component({
    template: `
        {{ route.data | async | json }}
        {{ route.snapshot.data | json }}
    `
})
export class UserPageComponent {
    constructor(public route: ActivatedRoute) {}
}
```

</div>

</Scroller>

Read more: https://angular.io/guide/router

---
title: Sandbox / Router
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-u5tj8v?file=src/app/app.module.ts
preload: false
hideInToc: true
---

---

# Workshop #6

Add routing (List, Detail, Create)  
Branch: `workshop-6-start`

<Scroller>

1. Define a route `restaurants` that will lazy load the routes contained in RestaurantsModule

    ```ts
    const routes: Route[] = [
        {
            path: 'restaurants',
            loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsModule)
        },
        { path: '**', redirectTo: 'restaurants' }
    ];

    @NgModule({
        imports: [
            ..., // remove RestaurantsModule from the imports
            RouterModule.forRoot(routes)
        ]
    })
    export class AppModule {}
    ```

2. Put `<router-outlet></router-outlet>` in the `app.component.html`.  
    It's placement will impact where the route is rendered in the DOM.

    ```html 
    <!-- app.component.html -->
    <router-outlet></router-outlet>
    ```

3. Add navigation in the `app.component.html`. It should underline the active url.

    ```html
    <!-- app.component.html -->
    <nav>
        <a routerLink="/restaurants" routerLinkActive="active">Home</a>
        <!-- Covered later -->
        <a routerLink="/restaurants/new" routerLinkActive="active">Add new restaurant</a>
    </nav>
    <router-outlet></router-outlet>
    ```

4. The lazy loaded module should a child route `''` which would display a list of restaurants:

    ```sh
    $ ng g c restaurants/pages/restaurants-page
    ```

    ```ts
    const routes: Route[] = [
        {
            path: '',
            component: RestaurantsPageComponent
        }
    ];

    @NgModule({
        imports: [
            ...,
            RouterModule.forChild(routes)
        ],
    })
    export class RestaurantsModule {}
    ```

5. Place the logic that displayed a list of restaurants to `RestaurantsPageComponent`. Clicking on a restaurant should navigate to the detail page.

    ```ts
    <app-restaurant-card
        *ngFor="let r of restaurants"
        [restaurant]="r"
        [routerLink]="[r.id]"
    ></app-restaurant-card>
    ```

6. Define a component & route for the page for restaurant create from. For example: `/restaurants/new`. The component itself can be empty for now.

   ```sh
    $ ng g c restaurants/pages/edit-restaurant-page
    ```

    ```ts
    // restaurants.module.ts 
    {
        path: 'new', // Reached via /restaurants/new
        component: EditRestaurantPageComponent
    }
    ```

7. Define a component & route for the page of a single restaurant. For example: `/restaurants/:id`. The component itself can be empty for now.

    ```sh
    $ ng g c restaurants/pages/restaurant-page
    ```

    ```ts
    {
        path: ':id',
        component: RestaurantPageComponent,
        // guards
        canActivate: [RestaurantGuard], 
        // resolvers
        resolve: {
            restaurant: RestaurantResolver
         }
    }
    ```

8. Use a resolver to load the restaurant data by id from the url.

    ```ts
    @Injectable({ providedIn: 'root' })
    export class RestaurantResolver implements Resolve<Restaurant> {
        // Use the same api service to keep logic separated
        constructor(private apiService: RestaurantApiService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<Restaurant> {
            const id = Number(route.params.id); // Number(route.paramMap.get('id'));
            return this.apiService.getOne(id);
        }
    }
    ```

    ```ts
    // restaurant-api.service.ts
    export class RestaurantApiService {
        ...

        getOne(id: Restaurant['id']): Observable<Restaurant> {
            return this.httpClient.get<Restaurant>(`http://localhost:3000/restaurants/${id}`);
        }
    }
    ```

9.  Use a guard to prevent navigation if `id` is not a number.  
    For example: `/restaurants/something-else`.

    ```ts
    @Injectable({ providedIn: 'root' })
    export class RestaurantGuard implements CanActivate {
        canActivate(route: ActivatedRouteSnapshot): boolean {
            const id = Number(route.params.id);
            return !isNaN(id);
        }
    }
    ```

10. Retrieve the resolved restaurant data from `ActivatedRoute` & display detailed restaurant information inside the restaurant's page:

    <div class="grid grid-cols-2 gap-4">

    ```ts
    // restaurant-page.component.ts
    @Component(...)
    export class RestaurantPageComponent {
        restaurant$ = this.route.data.pipe(
            map(data => data.restaurant)
        );

        constructor(private route: ActivatedRoute) {}
    }

    ```

    ```html
    <!-- restaurant-page.component.html -->
    <ng-container *ngIf="restaurant$ | async as restaurant">
        {{ restaurant.name }}
        {{ restaurant.rating | stars }}

        {{ restaurant.description }}
    </ng-container>
    ```

    </div>
    
   

</Scroller>

---
layout: cover
background: /images/cover-start.gif
background-position-x: 200%
---

# Day 2

## Practical introduction to Angular
 
---
layout: center
class: text-center
---

# RxJS & Observables

<img src="https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png" style="width: 200px; margin: 2rem auto;" >

---
hideInToc: true
---

# Observables in Angular

Provides tools to handle asynchronous logic of your application.

Example:

```ts
// Create simple observable that emits three values
const ticker$ = interval(1000).pipe(take(3));

// Execute with the observer object
ticker$.subscribe({
  next: (x: number) => console.log('Observer got a next value: ' + x),
  error: (err: Error) => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
});

// Logs:
// Observer got a next value: 1 after 1 s
// Observer got a next value: 2 after 1 s 
// Observer got a next value: 3 after 1 s
// Observer got a complete notification
```

---
hideInToc: true
---

# Observable operators with .pipe()

Examples of most common RxJS usage in Angular

<Scroller>

Handling errors in HTTP requests

```ts
this.httpClient.get('/api/users').pipe(
    catchError((response: HttpErrorResponse) => {
        alert('Something went wrong');
        return NEVER; // or of([]) to provide some fallback data to the subscriber
    })
)
```

Handling nested HTTP requests

```ts
const adminPostsWithComments$ = this.httpClient.get('/api/user').pipe(
    // After user is loaded, filter the stream to admin users
    filter(user => user.isAdmin),
    // After admin is loaded, load its posts
    switchMap((user) => this.httpClient.get(`/api/posts/user/${user.id}`))
    // After the posts are loaded, filter only those with comments
    map(posts => posts.filter(post => post.comments.length > 0))
)
```

Debouncing value changes in forms

```ts
const searchResults$ = this.form.get('search').valueChanges.pipe(
    debounceTime(500), // wait for 500 seconds before processing the request
    distinctUntilChanged(), // only emit if value has changed    
    switchMap(term => { // call the API service each time the search term changes
        this.isSearching = true;
        return this.searchService.searchForUser(term).pipe(
            finalize(() => this.isSearching = false) // Hide loader if search succeeds or fails
        )
    }),
);
```

</Scroller>

---
hideInToc: true
---

# Preventing memory leaks

Some subscriptions stay running even when the component it is destroyed.

Unsubscription strategies:

<div class="grid grid-cols-2 gap-4">

- `data$ | async`
- `Subscription.unsubscribe()`
- `takeUntil()`

<Scroller>

```ts
@Component({
    template: `
        {{ asyncData$ | async }}
    `
})
export class MyComponent implements OnInit, OnDestroy {
    asyncData$ = interval(1000); // #1
    private subscription: Subscription; // #2
    private destroy$ = new Subject(); // #3

    ngOnInit() {
         // #2
        this.subscription = interval(1000).subscribe(
            (secondsPassed) => console.log(secondsPassed)
        );

        // #3
        interval(1000).pipe(takeUntil(this.destroy$)).subscribe(
            (secondsPassed) => console.log(secondsPassed)
        );
    }

    ngOnDestroyed() {
         // #2
        this.subscription.unsubscribe();

        // #3
        this.destroy$.next();
        this.destroy$.complete();
    }
}
```

</Scroller>

</div>


---

# Workshop #7 / Router loader

Use `Router.events` stream to indicate when the router is loading data.  
Branch: `workshop-7-start`


<div class="grid grid-cols-2 gap-4">

1. Inject `Router` service in app.component.ts
2. `filter()` the router events stream to only emit the `NavigationStart` & `NavigationEnd` events
3. `map()` the `NavigationStart` & `NavigationEnd` events to `true` & `false` values.
4. Subscribe to the loading stream and set `isLoading` property.
5. Use the `isLoading` property in the `app.component.html` to indicate a loading state


```ts
@Component({ 
    template: `
        <output *ngIf="isLoading">Loading...</output>
        ...
    `
})
export class AppComponent implements OnInit {
    isLoading = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.pipe(
            filter(event => event instanceof NavigationStart || event instanceof NavigationEnd),
            map(event => event instanceof NavigationStart ? true : false)
        ).subscribe(isLoading => {
            this.isLoading = isLoading;
        })
    }
}
```

</div>


---
layout: center
class: text-center
hideInToc: true
---

# 15 minute break

<Countdown seconds="900" />

---
layout: center
---


# Forms

---
hideInToc: true
---

# @angular/forms

Provides two different modules to handle user input.

- Template-driven `FormsModule`
    - Useful for simple forms
    - Harder to implement complex behavior  
    (form arrays, debouncing remote verification, etc.)
- Reactive `ReactiveFormsModule`
    - Scalable, reusable & testable
    - Easier to manage when implementing complex behavior  
    (e.g. validation by multiple criteria, debouncing, remote verification, etc.)

---
hideInToc: true
---

# Template-driven forms


<Scroller>

<div class="grid grid-cols-2 gap-4">

<div> 

- `[(ngModel)]` directive
- Validators are added via attributes  
    (`required`, `min`, `maxlength`) 
</div>
<div>

```ts
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ ..., FormsModule ]
})
export class AppModule {}
```

</div>

</div>

Usage:

```ts
@Component(`
    template: `
        <form (ngSubmit)="onSubmit()">
            <input type="text" [(ngModel)]="name" />
            <input type="checkbox" [(ngModel)]="surname" />
        </form>
    `
`)
export class SomeComponent {
    name = ''; 
    surname = ''; 
}
```

</Scroller>

---
title: Sandbox / Template-driven forms
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-q58ox2?file=src/app/app.module.ts
preload: false
hideInToc: true
---

---
hideInToc: true
---

# Reactive Forms

<Scroller>

<div class="grid grid-cols-2 gap-4">

<div> 

- `FormBuilder` service
- `[formGroup]`, `[formGroupName]`  
  `[formControl]`, `[formControlName]`  
  `[formArray]`, `[formArrayName]`
</div>
<div>

```ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ ..., ReactiveFormsModule ]
})
export class AppModule {}
```

</div>

</div>

Usage:

```ts
import { FormBuilder } from '@angular/forms';

@Component(`
    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <input type="text" formControlName="name" />
            <input type="checkbox" [formControl]="acceptTermsAndConditions" />
        </form>
    `
`)
export class SomeComponent {
    form = this.fb.group({
        name: ''
    });
    
    acceptTermsAndConditions = new FormControl(false);

    constructor(private fb: FormBuilder) {}

    onSubmit() { ... }
}
```

</Scroller>

---
title: Sandbox / Reactive forms
layout: iframe
url: https://stackblitz.com/edit/angular-ivy-febwg1?file=src/app/app.module.ts
preload: false
hideInToc: true
---
 
---
hideInToc: true
---

# Reactive vs Template-driven forms

Validators

<div class="grid grid-cols-2 gap-4">

```ts
@Component({
    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <input type="text" formControlName="name" />
            {{ form.controls.name.errors?.required ? 'Required' : '' }}
        </form>
    `
})
export class ReactiveFormsComponent {
    form = this.fb.group({
        name: ['', Validators.required]
    });

    constructor(private fb: FormBuilder) {}
}
```

```ts
@Component({
    template: `
        <form (ngSubmit)="onSubmit()">
            <input #modelRef="ngModel" type="text" [(ngModel)]="name" required />
            {{ modelRef.errors?.required ? 'Required' : '' }}
        </form>
    `
})
export class TemplateFormsComponent {
    name = '';
}
```

</div>

---
hideInToc: true
---

# Reactive vs Template-driven forms

Summary

|                     | **Reactive**                              | **Template-driven**                  |
| ------------------- | ----------------------------------------- | ------------------------------------ |
| **Setup**           | More explicit, created in component class | Less explicit, created by directives |
| **Data model**      | Structured                                | Unstructured                         |
| **Form validation** | Functions (Validators.min\|max\|required) | Directives ([min], [required])       |
| **Mutability**      | Immutable                                 | Mutable                              |

---

# Workshop #8 / Restaurant creation form

Use Reactive Forms to implement a form for restaurant creation.  
Branch: `workshop-8-start`

<Scroller>

1. Import `ReactiveFormsModule` into the module that has `EditRestaurantPageComponent` in the `declarations[]`
2. Inject `FormBuilder` service into the `EditRestaurantPageComponent` and use `FormBuilder.group()` to create a form containing fields contained in the `Restaurant` entity
    ```ts
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            description: [''],
             // integerValidator covered in next step
            rating: ['', [Validators.min(0), Validators.max(0), integerValidator] ],
            ...
        })
    }

    onSubmit() {
        console.log('TODO', this.form.value);
    }
    ```
3. Write a custom validator named `integerValidator` that checks if the value is an integer.

    ```ts
    const integerValidator: ValidatorFn = (control) => {
        const value = control.value;

        if (typeof value !== 'number') {
            return null; // No errors
        }

        if (value % 1 === 0) {
            return null; // No errors
        }

        return {
            integer: true // Report an integer error
        };
    }
    ```

4. Bind the newly created `form` using `[formGroup]` directive  
    use `formControlName` directive to bind input elements to the `form`:
    ```html
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
        ...
        <input formControlName="name" type="text" />
        <input formControlName="rating" type="number" />
        <textarea formControlName="description"></textarea>
        ...

        <button [disabled]="form.invalid" type="submit">Submit</button>
    </form>
    ```
5. Show error messages under the field if it is not valid
    ```html
    <input ... [class.has-errors]="form.controls.name.touched && form.controls.name.invalid" />
    {{ form.controls.name.touched && form.controls.name.errors?.required ? 'Required' : '' }}
    <!-- Use json pipe for debugging -->
    {{ form.value | json }} 
    <!-- Optional. Write a custom pipe to make the template shorter -->
    <input ... [class.has-errors]="form.controls.name | validation">
    {{ form.controls.name | validation }}
    ```

    ```ts
    import { Pipe, PipeTransform } from '@angular/core';
    import { AbstractControl } from '@angular/forms';

    @Pipe({ name: 'validation', pure: false })
    export class ValidationPipe implements PipeTransform {
        transform(value: AbstractControl): string {
            if (value.untouched || !value.errors) {
                return '';
            }

            if (value.errors.required) {
                return 'Required';
            } else if (value.errors.min) {
                return 'Minimum value is ' + value.errors.min.min;
            } else if (value.errors.max) {
                return 'Maximum value is ' + value.errors.max.max;
            }

            return 'Invalid';
        }
    }
    ```

6. Submit the form when it is valid and the user submits the form `(ngSubmit)` event on the `[formGroup]` element
    ```ts
    // restaurant-api.service.ts
    create(formValue: Omit<Restaurant, 'id'>) {
        return this.httpClient.post<Restaurant>('http://localhost:3000/restaurants', formValue);
    }
    
    // edit-restaurant-page.component.ts
    export class EditRestaurantPageComponent {
        constructor(private router: Router, private route: ActivatedRoute) {}

        onSubmit() {
            this.isLoading = true;

            this.apiService.create(this.form.value).subscribe({
                next: (response) => {
                    // Opens the newly created restaurant detail page
                    // Relative paths are used thanks to with `relativeTo`
                    // Absolute paths can also be used: ['/restaurant', response.id]
                    this.router.navigate(['..', response.id], { relativeTo: this.route });
                },
                error: () => {
                    this.isLoading = false;
                    alert('Something went wrong');
                },
            });
        }
    }
    ```
7. Let's re-use the `EditRestaurantPage` component for editing a restaurant
    ```ts
    // Restaurants module route definitions
    const routes: Routes = [
        ...,
        {
            path: ':id/edit',
            component: EditRestaurantPageComponent,
            resolve: {
                restaurant: RestaurantResolver
            }
        }
    ];
    ```

    Patch the form with loaded restaurant data

    ```ts
    // edit-restaurant-page.component.ts
    constructor(..., private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ restaurant }) => {
            if (restaurant) {
                this.form.patchValue(restaurant);
            }
        });
    }

    onSubmit() {
        const isEditing = this.form.value.id !== undefined;
        const request$ = isEditing
            ? this.apiService.update(this.form.value)
            : this.apiService.create(this.form.value);

        request$.subscribe({
            next: (response) => {
                this.router.navigate(['/restaurants', response.id]);
            },
            error: () => {
                this.isLoading = false;
                alert('Something went wrong');
            },
        });
    }
    ```

    Add the `update()` method to the api service

    ```ts
    // restaurant-api.service.ts
    update(formValue: Restaurant) {
        return this.httpClient.put<Restaurant>(`http://localhost:3000/restaurants/${formValue.id}`, formValue);
    }
    ```


</Scroller>

---
layout: center
class: text-center
hideInToc: true
---

# 15 minute break

<Countdown seconds="900" />

---
layout: center
---

# HttpClientModule 

---
hideInToc: true
---

# @angular/common/http

Exposes the `HttpClient` service for sending HTTP (GET, POST, PUT, PATCH, DELETE) requests

Usage:

<div class="grid grid-cols-2 gap-4">

```ts
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ ..., HttpClientModule ]
})
export class AppModule {}
```

```ts
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    template: `
        <h2 *ngIf="user$ | async as user; else loadingRef">
            {{ user.name }}
        </h2>
        <ng-template #loadingRef>
            Loading...
        </ng-template>
    `
})
export class AppComponent implements OnInit {
    user$: Observable<string[]> = this.http.get('/api/user');

    constructor(private http: HttpClient) {}
}
```

</div>

---
hideInToc: true
---

# HTTP Interceptors

Secret power of HttpClientModule is the ability to intercept requests and responses.

<Scroller>

```ts
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor.ts';
import { ErrorInterceptor } from './interceptors/error.interceptor.ts';

@NgModule({
    imports: [HttpClientModule],
    providers: [
        { provide: HTTP_INTERCEPTORS, multi: true, useClass: AuthInterceptor },
        { provide: HTTP_INTERCEPTORS, multi: true, useClass: ErrorInterceptor }
    ]
})
export class AppModule {}
```

Interceptor to add authorization header to requests

```ts
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
    
    // Shows an error message in the UI if the request fails
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestWithAuthToken = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getUserToken())
        });
        
        return next.handle(requestWithAuthToken);
    }
}
```

Interceptor that shows an error message in the UI if the request that modifies the database fails

```ts
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(response => {
            if (req.method !== 'GET') {
                // POST, PUT, PATCH, DELETE
                this.alertService.error(response.statusText);
            }

            return throwError(response); // Rethrow error to the caller
        }));
    }
}
```
</Scroller>

---

# Workshop #9

Add ability to delete a restaurant from the restaurant details page.
Create an interceptor that would ask for confirmation regarding any DELETE requests.  
Branch: `workshop-9-start`

<Scroller>

1. Add a delete button in the restaurant detail page
2. Send a DELETE request via the `RestaurantApiService` service
    ```ts
    delete(id: Restaurant['id']) {
        return this.httpClient.delete(`http://localhost:3000/restaurants/${id}`);
    }
    ```
3. When user clicks the button this request should be sent to the server
    ```ts
     onDeleteClick(restaurantId: Restaurant['id']) {
        this.isDeleting = true;

        this.apiService.delete(restaurantId).subscribe({
            next: () => {
                this.router.navigate(['..'], { relativeTo: this.route });
            },
            error: () => {
                this.isDeleting = false;
            },
            complete: () => {
                this.isDeleting = false;
            },
        });
    }
    ```

4. Create a custom interceptor class `DeleteConfirmationInterceptor` by implementing the `HttpInterceptor` interface
    ```ts
    import { Injectable } from '@angular/core';
    import { HttpInterceptor } from '@angular/common/http';

    // interceptors/delete-confirmation.interceptor.ts
    @Injectable()
    export class DeleteConfirmationInterceptor implements HttpInterceptor {
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            if (req.method !== 'DELETE') {
                // Leave the request untouched
                return next.handle(req);
            }

            const confirmation = confirm('Are you sure you want to delete?');

            if (!confirmation) {
                return EMPTY; // Abort the request
            }

            return next.handle(req).pipe(
                tap((response) => {
                    if (response instanceof HttpResponse) {
                        alert('Item deleted');
                    }
                })
            );
        }
    }

    // app.module.ts
    import { DeleteConfirmationInterceptor } from './interceptors/delete-confirmation.interceptor';
    import { HTTP_INTERCEPTORS } from '@angular/common/http';
    
    @NgModule({
        imports: [HttpClientModule, ...],
        providers: [
            {
                provide: HTTP_INTERCEPTORS,
                multi: true,
                useClass: DeleteConfirmationInterceptor
            }
        ]
    })
    export class AppModule {}
    ```

</Scroller>

---
layout: center
class: text-center
hideInToc: true
---

# 15 minute break

<Countdown seconds="900" />


---
layout: center
---

# Dependency injection
 
---
hideInToc: true
---

# Dependency injection

Defining feature of Angular

- Allows logic to be contained into distinct, single-purpose classes, making the code easier to test & maintain.

<Scroller>
<div class="grid grid-cols-2 gap-4">

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HeroService {
    constructor(
        // Inject other dependencies here
        // E.g. HttpClient service that HttpClientModule provides
        private httpClient: HttpClient
    ) {}
    
    getHeroes(): Observable<Hero[]> {
        return this.httpClient.get<Hero[]>('/api/heroes');
    }

    ...
}
```

```ts
@Component({ ... })
export class HeroListComponent {
    heroes$ = this.apiService.getHeroes();

    constructor(
        private apiService: HeroService,
        private confirmService: ConfirmService,
        private alertService: AlertService
    ) {}

    onDeleteClick(hero) {
        this.confirmService.askForConfirmation().pipe(
            filter(saidYes => saidYes === true),
            switchMap(() => this.apiService.deleteHero(hero))
        ).subscribe({
            next: () => this.alertService.showSuccessMessage(),
            error: (response) => this.alertService.showErrorMessage(response)
        })
    }
}
```


</div>
</Scroller>

---
hideInToc: true
---

# Hierarchical Dependency Injectors

The Angular dependency injection system is hierarchical. There is a tree of
injectors that parallels an app's component tree. You can reconfigure the
injectors at any level of that component tree.


```mermaid
graph BT
A --> AM(AppModule) 
B(ProductsListComponent) --> A(AppComponent) 
B1(ProductComponent) --> B
B2(ProductComponent) --> B
C(CartComponent) --> A

```

---
hideInToc: true
---

# Hierarchical Dependency Injectors


- @Injectable-level configuration 
- @NgModule-level injectors
- @Component-level injectors
    ```ts
    @Component({ providers: [AnalyticsService] })
    export class PaymentComponent implements OnInit, OnDestroy {
        private tracker = this.analyticsService.track('Payment');

        constructor(private analyticsService: AnalyticsService) {}

        ngOnInit() {
            this.tracker.start();
        }

        ngOnDestroy() {
            this.tracker.stop();
        }
    }
    ```

Read more: https://angular.io/guide/dependency-injection-in-action

---
hideInToc: true
---

# @Injectable-level configuration

<div class="grid grid-cols-1 gap-4">

```ts
import { Injectable } from '@angular/core'

// Will be available globally - only a single instance of AnalyticsService will be created and injected
@Injectable({ providedIn: 'root' })
export class HeroService {}
```


```ts
import { Injectable } from '@angular/core'

// HeroService can be injected in modules that will import HeroModule
@Injectable({ providedIn: HeroModule })
export class HeroService {} 
```

```ts
import { Injectable } from '@angular/core'

// HeroService can be injected in modules/components that have this service in providers[]
@Injectable()
export class HeroService {} 
```

</div>

Read more: https://angular.io/guide/dependency-injection-in-action

---
hideInToc: true
---

# @NgModule-level injectors

```ts
const APPLICATION_TITLE = new InjectionToken<string>('APP_TITLE');

@NgModule({
    providers: [
        HeroService, // If HeroService is not provided anywhere, e.g.: @Injectable()
        {
            // Provide a string value that can be injected in other components
            // Usage: constructor(@Inject(APPLICATION_TITLE) private appTitle: string) {}
            provide: APPLICATION_TITLE,
            useValue: 'iPuodas'
        },
    ]
})
export class AppModule {}
```

Read more: https://angular.io/guide/dependency-injection-in-action

---
hideInToc: true
---

# @Component-level injectors

```ts
import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-heroes',
    providers: [ RandomEmojiService, { provide: RANDOM_EMOJI_BUCKET, useValue: [ '✨', '🐻', '🚀' ] } ]
})
export class EmojiListComponent {
    randomEmoji = this.randomEmojiService.getRandomEmoji();

    constructor(private randomEmojiService: RandomEmojiService) {}
}
```

Read more: https://angular.io/guide/dependency-injection-in-action

---

# Workshop #10

Liked and disliked restaurants  
Branch: `workshop-10-start`

<Scroller>

- Restaurant detail page
  - Add a Like/Dislike button in the restaurant detail page  
      <img src="/sketches/like-dislike-component.svg" width="260">
  - Likes/Dislikes should be stored in a dedicated service
  - Likes/Dislikes should persist if the user reloads the website (use localStorage)
    ```ts
    @Injectable({ providedIn: 'root' })
    export class LikeDislikeService {
        private likedRestaurantIds: Record<Restaurant['id'], boolean> = {};

        constructor() {
            const likedRestaurantIds = localStorage.getItem('likedRestaurantIds');

            if (likedRestaurantIds) {
                this.likedRestaurantIds = JSON.parse(likedRestaurantIds);
            }
        }

        isLiked(restaurant: Restaurant): boolean {
            return this.likedRestaurantIds[restaurant.id] === true;
        }

        isDisliked(restaurant: Restaurant): boolean {
            return this.likedRestaurantIds[restaurant.id] === false;
        }

        like(restaurant: Restaurant): void {
            this.likedRestaurantIds[restaurant.id] = true;
            localStorage.setItem('likedRestaurantIds', JSON.stringify(this.likedRestaurantIds));
        }

        dislike(restaurant: Restaurant): void {
            this.likedRestaurantIds[restaurant.id] = false;
            localStorage.setItem('likedRestaurantIds', JSON.stringify(this.likedRestaurantIds));
        }
    }
    ```
- Restaurant list page
  - Liked/Disliked state should be shown in the list
  - Should be possible to filter the list to show only liked restaurants:
    ```html
    <!-- restaurants-page.component.html -->
    <button (click)="showOnlyLiked = true">Show only liked</button>
    <button (click)="showOnlyLiked = false">Show all</button>

    <app-restaurant-list
        *ngIf="restaurants$ | async as restaurants; else loadingRef"
        [restaurants]="showOnlyLiked ? (restaurants | filterLiked) : restaurants"
    ></app-restaurant-list>
    ```

    ```ts
    @Pipe({ name: 'filterLiked' })
    export class FilterLikedPipe implements PipeTransform {
        constructor(private likeDislikeService: LikeDislikeService) {}

        transform(restaurants: Restaurant[]): Restaurant[] {
            return restaurants.filter(restaurant => this.likeDislikeService.isLiked(restaurant));
        }
    }
    ```

</Scroller>

---
layout: center
class: text-center
hideInToc: true
---

# 15 minute break

<Countdown seconds="900" />

---
layout: center
---

# Testing

---
hideInToc: true
---

# Types of tests

<div class="grid grid-cols-2 gap-4">

<div>

- Unit tests
  - Small tests that test a single piece of functionality (component, function, service, etc.)
- Integration tests
  - Higher level tests that test how different units work together as a whole
- End-to-end tests
  - Run in a browser and tests the whole application by interacting with the UI.

</div>

<div>
    <img src="/images/test-types.png"  />
</div>

</div>


---
hideInToc: true
---

# Unit tests in Angular

<div class="grid grid-cols-2 gap-4">

<div>

- Unit tests are fast and easy to write compared to integration tests or end-to-end tests
- Becomes more important when working with teams / mid-sized projects who aim for coverage targets (80% coverage)
- Common practices:
  - Writing unit tests for code that's used in multiple places is more important
  - Keep unit tests simple
  - Read more: https://github.com/goldbergyoni/javascript-testing-best-practices


</div>

<div>


```ts
// Test suite
describe('DegreesToFahrenheitPipe' () => {
    // Test spec
    it('should convert degrees to fahrenheit', () => {
        // Arrange
        const pipe = new DegreesToFahrenheitPipe();
        // Act
        const result = pipe.transform(100);
        // Assert
        expect(result).toBe(212);
    })
})

```

</div>

</div>

---
hideInToc: true
---

# How would you cover each method with unit tests?

```ts
@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient, private alertService: AlertService) {}

  getCompletedTodos(todos: Todo[]): Todo[] {
    return todos.filter((todo) => todo.completed);
  }

  getRandomTodoNumber(): number {
    return Math.round(Math.random() * 5);
  }

  congratulateTodo(todo: Todo): void {
    this.alertService.alert(`Congratulations, ${todo.title} is completed!`);
  }

  getTodos() {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((response) => response.slice(0, 5)));
  }
}
```

https://angular.io/guide/testing

---
layout: iframe
url: https://stackblitz.com/edit/angular-es2rnm?file=src/app/todo/todo-list.component.spec.ts
preload: false
title: Sandbox / Testing
hideInToc: true
---

---

# Workshop #11

Add tests for the restaurant card service.

1. Cover `stars.pipe` with unit tests
2. Cover any method of `restaurant-api.service` with unit tests
3. Cover `restaurant-list.component` with unit tests

---

# Next steps

Few paths to continue the Angular journey

- [Angular Docs](https://angular.io/docs)
- [Angular Material](https://material.angular.io/)
- [RxJS Top ten - Code this, not that](https://www.youtube.com/watch?v=ewcoEYS85Co)
- [Top 7 RxJS Concepts for Angular Developers](https://www.youtube.com/watch?v=65Us8NwmYf4)
- [Angular Testing Quick start](https://www.youtube.com/watch?v=BumgayeUC08)
- [State management with NgRx](https://fireship.io/lessons/angular-ngrx-redux-starter-guide/)

---
layout: center
hideInToc: true
---

# Good luck and have fun!

---
layout: cover
background: /images/cover-end.png
title: Closing slide
large: true
hideInToc: true
---

- Respect
- Reliability
- Innovation
- Competence
- Team spirit

<style>
    .slidev-layout ul {
        @apply text-2xl;
        
        color: var(--secondary-text-color);
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>