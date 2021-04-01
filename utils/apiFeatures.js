class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filterBykeyWords() {
        if (this.queryString.keyWords) {
            const keyWords = this.queryString.keyWords.split(' ');
            let queryKeyWords = [];
            keyWords.forEach(keyWord => {
                queryKeyWords.push({ keyWords: keyWord.toLowerCase() });
            });
            this.query = this.query.and(queryKeyWords);
        };

        return this;
    }

    filter() {
        // 1) Filtering Excluded fields
        const queryObj = {...this.queryString};
        const excludedField = ['sort', 'fields', 'page', 'limit', 'keyWords'];
        excludedField.forEach(el => delete queryObj[el]);

        // 2) Adding gte, gt, lte, lt filter
        // http://127.0.0.1:5000/api/v1/recipes?ranking[gte]=4.6 -> { ranking: { gte: '4.6' } }
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    sort() {
        if (this.queryString.sort) {
            // Allowing multiple sorting parameters
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-ranking -createdAt');
        }

        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            // Excluding __v field
            this.query = this.query.select('-__v');
        }

        return this;
    }

    paginate() {
        // http://127.0.0.1:5000/api/v1/recipes?page=2&limit=12 -> 1-12 page 1, 13-24 page 2...

        const page = this.queryString.page * 1 || 1; 
        const limit = this.queryString.limit * 1 || 100;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
}

module.exports = APIFeatures;