export function routes($stateProvider) {
    $stateProvider
        .state('root', () => {
            url:''
        })
        .state('root.home', {
            url: '/',
            templateUrl: 'partials/home.html'
        });
}
