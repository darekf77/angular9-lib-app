TODO to compile with 

## 1. thing
/node_modules/ng-packagr/lib/flatten/rollup.js

```
 const bundle = yield rollup.rollup({
            context: 'this',
            external: moduleId => externalModuleIdStrategy.isExternalDependency(moduleId),
            inlineDynamicImports: true,  // required change
```
node_modules/ng-packagr/lib/ng-package/entry-point/write-bundles.transform.js

## 2. thing
comment this code

```
// log.info('Bundling to UMD');
// yield flatten_1.flattenToUmd(Object.assign(Object.assign({}, opts), { entryFile: fesm5, destFile: umd, dependencyList: opts.dependencyList }));

```
