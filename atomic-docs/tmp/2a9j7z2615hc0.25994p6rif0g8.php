


<div id="atomic-search" class="atomic-search">
    <i class="fa fa-times fa-3x js_atomic-search__close atomic-search__close"></i>
    <div class="atomic-search__content">
        <div class="atomic-search__inputWrap">
            <input type="text" class="fuzzy-search atomic-search__input" placeholder="Search Components &amp; Categories">
        </div>

            <ul class="list atomic-search__results">
                <?php foreach (($sideBarCats?:[]) as $cat): ?>
                    <?php foreach (($cat['components']?:[]) as $comp): ?>
                        <li data-type="comp" data-slug="<?= $comp->slug ?>"><i class="fa fa-file-o"></i> <a href="#" class="atomic-search__item"><?= $comp->slug ?></a>
                            <a href="<?= $cat['catLink'] ?>"><?= $cat['category']->slug ?></a></li>
                    <?php endforeach; ?>
                    <?php foreach (($cat['subcategories']?:[]) as $subCat): ?>
                        <?php foreach (($subCat['components']?:[]) as $subComp): ?>
                            <li data-type="comp" data-slug="<?= $subComp->slug ?>"><i class="fa fa-file-o"></i> <a href="#" class="atomic-search__item"><?= $subComp->slug ?></a>
                                <a href="<?= $cat['catLink'] ?>"><?= $cat['category']->slug ?></a>/<a href="<?= $subCat['childCatLink'] ?>"><?= $subCat['category']->slug ?></a></li>
                        <?php endforeach; ?>
                    <?php endforeach; ?>

                <?php endforeach; ?>
            </ul>

    </div>
</div>