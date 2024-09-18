import { IRestaurant } from "../interface/IRestaurant";
import { Repository, DataSource } from "typeorm";
import { Restaurant } from "../interface";
import { RestaurantSchema } from "../entity";
import { Service, Inject } from "typedi";

@Service()
class RestaurantService implements IRestaurant {
    constructor(
        @Inject(() => DataSource) private dataSource: DataSource,
        @Inject('RestaurantRepository') private repository: Repository<Restaurant>
    ) { }


    async getAll() {
        return await this.repository.find();
    };
    async getDataById(restaurantId: number) {
        return await this.repository.findOneBy({ id: restaurantId });

    };
    async getDataByName(name: string) {
        const restaurants: Restaurant[] = await this.repository.createQueryBuilder("Restaurants")
            .where("Restaurants.name LIKE :name", { name: `%${name}%` })
            .getMany();
        return restaurants
    };
    async getDataByFeatured(id: number): Promise<Restaurant[]> {
        return await this.repository.findBy({ featured_id: id });
    }

}
export { RestaurantService }