use yew::prelude::*;

#[function_component(App)]
pub fn app() -> Html {
    html! {
        <main>
            <img class="logo" src="img/null-logo.png" alt="null logo" />
            <h1>{ "Welcome to the null" }</h1>
            <span class="subtitle">{ "from the null with " }<i class="heart" /></span>
        </main>
    }
}
