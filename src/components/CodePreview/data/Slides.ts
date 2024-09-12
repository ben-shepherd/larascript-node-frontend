import DatabaseConfigExample from "./examples/DatabaseConfigExample";
import MigrationExample from "./examples/MigrationExample";
import ModelsExample from "./examples/ModelsExample";
import ObserverExample from "./examples/ObserverExample";
import RepositoryExample from "./examples/RepositoryExample";
import RoutesExample from "./examples/RoutesExample";
import ServiceProvider from "./examples/ServiceProviderExample";
import ValidationExample from "./examples/ValidationExample";
import ValidationOnFlyExample from "./examples/ValidationOnFlyExample";

export type SlidePage = {
    examples?: SlideItem[],
} & SlideItem;

export type SlideItem = {
    title?: string;
    description?: string;
    content?: string;
}

const Slides: SlidePage[] = [
    {
        title: "Service Providers",
        description: "Example of how to register commands and setup the commands system.",
        content: ServiceProvider
    },
    {
        title: "Models",
        description: "Example of a model.",
        content: ModelsExample
    },
    {
        title: "Repositories",
        description: "Example of a repository and custom queries.",
        content: RepositoryExample
    },
    {
        title: "Middleware",
        description: "Example of a migration to create the ApiToken table.",
        content: MigrationExample
    },
    {
        examples: [
            {
                title: "On the fly validation",
                description: "Example of validating on the fly.",
                content: ValidationOnFlyExample
            },
            {
                title: "Middleware Validation",
                description: "Example of a Middleware Validator used to update a user.",
                content: ValidationExample
            },
        ]
    },
    {
        title: "Observer",
        description: "Example of an Observer, which listens for changes on the User model.",
        content: ObserverExample
    },
    {
        title: "Routing",
        description: "Example of a single route, and a RouteResource for the Blog Model.",
        content: RoutesExample
    },
    {
        title: "Database Config",
        description: "Example config showing how to define your database connections.",
        content: DatabaseConfigExample
    }
]

export default Slides