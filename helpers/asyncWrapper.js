const asyncWrapper = controller => {
    return (req, res, next) => {
        controller(req, res).catch(error => next(error))
    }
}

module.exports = {
    asyncWrapper
}