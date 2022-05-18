// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
	
	// MAGIC
	
	event.remove({id: 'ars_nouveau:novice_spell_book'})
	event.shaped('ars_nouveau:novice_spell_book', [
		' S ',
		'BKB',
		' S '
	], {
		S: 'ars_nouveau:source_gem',
		B: 'create:brass_ingot',
		K: 'minecraft:book'
	})
	
	event.remove({id: 'ars_nouveau:source_jar'})
	event.shaped('ars_nouveau:source_jar', [
		'SSS',
		'G G',
		'BSB'
	], {
		S: 'ars_nouveau:archwood_slab',
		G: '#forge:glass',
		B: 'create:brass_ingot'
	})
	
	event.remove({id: 'ars_nouveau:arcane_pedestal'})
	event.shaped('ars_nouveau:arcane_pedestal', [
		'ASA',
		' A ',
		'AAA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: 'ars_nouveau:source_gem'
	})
	
	event.remove({id: 'ars_nouveau:agronomic_sourcelink'})
	event.shaped('ars_nouveau:agronomic_sourcelink', [
		'BSB',
		'BWB',
		'ASA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: 'ars_nouveau:source_gem',
		W: 'minecraft:wheat',
		B: 'create:brass_ingot'
	})
	
	event.remove({id: 'ars_nouveau:volcanic_sourcelink'})
	event.shaped('ars_nouveau:volcanic_sourcelink', [
		'BSB',
		'BLB',
		'ASA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: 'ars_nouveau:source_gem',
		L: 'minecraft:lava_bucket',
		B: 'create:brass_ingot'
	})
	
	event.remove({id: 'ars_nouveau:alchemical_sourcelink'})
	event.shaped('ars_nouveau:alchemical_sourcelink', [
		'BSB',
		'BEB',
		'ASA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: 'ars_nouveau:source_gem',
		E: 'minecraft:brewing_stand',
		B: 'create:brass_ingot'
	})
	
	event.remove({id: 'ars_nouveau:vitalic_sourcelink'})
	event.shaped('ars_nouveau:vitalic_sourcelink', [
		'BSB',
		'BGB',
		'ASA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: 'ars_nouveau:source_gem',
		G: 'minecraft:glistering_melon_slice',
		B: 'create:brass_ingot'
	})
	
	event.remove({id: 'ars_nouveau:mycelial_sourcelink'})
	event.shaped('ars_nouveau:mycelial_sourcelink', [
		'BSB',
		'BMB',
		'ASA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: 'ars_nouveau:source_gem',
		M: 'minecraft:mushroom_stew',
		B: 'create:brass_ingot'
	})
	
	event.remove({id: 'ars_nouveau:enchanting_apparatus'})
	event.shaped('ars_nouveau:enchanting_apparatus', [
		'SGS',
		'S S',
		'AAA'
	], {
		A: 'ars_nouveau:arcane_stone',
		S: '#forge:ingots/silver',
		G: 'occultism:spirit_attuned_gem'
	})
	
	event.remove({id: 'botania:apothecary_default'})
	event.remove({id: 'botania:apothecary_mossy'})
	event.remove({id: 'botania:apothecary_forest'})
	event.remove({id: 'botania:apothecary_plains'})
	event.remove({id: 'botania:apothecary_mountain'})
	event.remove({id: 'botania:apothecary_fungal'})
	event.remove({id: 'botania:apothecary_swamp'})
	event.remove({id: 'botania:apothecary_desert'})
	event.remove({id: 'botania:apothecary_taiga'})
	event.remove({id: 'botania:apothecary_mesa'})
	
	event.remove({id: 'botania:fertilizer_dye'})
	event.shapeless('botania:fertilizer', ['minecraft:bone_meal', '#botania:petals', '#botania:petals'])
	
	
	// ENGINEERING
	
	event.remove({id: 'create:crafting/materials/andesite_alloy'})
	event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
	
	event.recipes.immersiveengineeringAlloy('create:andesite_alloy', 'minecraft:andesite', 'create:zinc_ingot')
	
	event.remove({id: 'create:crafting/kinetics/cogwheel'})
	event.shaped('4x create:cogwheel', [
		'SWS',
		'WAW',
		'SWS'
	], {
		S: 'immersiveengineering:stick_treated',
		W: '#forge:treated_wood',
		A: 'create:andesite_alloy'
	})
	
	event.remove({id: 'create:crafting/kinetics/large_cogwheel'})
	event.shaped('create:large_cogwheel', [
		'SWS',
		'WCW',
		'SWS'
	], {
		S: 'immersiveengineering:stick_treated',
		W: '#forge:treated_wood',
		C: 'create:cogwheel'
	})
	
	event.remove({id: 'create:crafting/kinetics/water_wheel'})
	event.shaped('create:water_wheel', [
		'SSS',
		'SCS',
		'SSS'
	], {
		S: '#forge:treated_wood_slab',
		C: 'create:large_cogwheel'
	})
	
	event.remove({id: 'create:crafting/materials/andesite_casing'})
	event.shaped('4x create:andesite_casing', [
		'WWW',
		'ASA',
		'WWW'
	], {
		W: '#forge:treated_wood',
		A: 'create:andesite_alloy',
		S: 'immersiveengineering:alu_scaffolding_standard'
	})
	
	event.shaped('kubejs:andesite_machine', [
		'RSR',
		'CAC',
		'RDR'
	], {
		R: 'immersiveengineering:stick_aluminum',
		S: 'create:shaft',
		C: 'create:cogwheel',
		A: 'create:andesite_casing',
		D: 'create:andesite_alloy'
	})
	
	event.remove({id: 'create:crafting/kinetics/mechanical_press'})
	event.shaped('create:mechanical_press', [
		' MH',
		' I '
	], {
		H: Item.of('immersiveengineering:hammer').ignoreNBT(),
		M: 'kubejs:andesite_machine',
		I: 'minecraft:iron_block'
	})
	
	event.remove({id: 'create:crafting/kinetics/encased_fan'})
	event.shaped('create:encased_fan', [
		' MH',
		' P '
	], {
		H: Item.of('immersiveengineering:hammer').ignoreNBT(),
		M: 'kubejs:andesite_machine',
		P: 'create:propeller'
	})
	
	event.remove({id: 'create:crafting/kinetics/mechanical_mixer'})
	event.shaped('create:mechanical_mixer', [
		' MH',
		' W '
	], {
		H: Item.of('immersiveengineering:hammer').ignoreNBT(),
		M: 'kubejs:andesite_machine',
		W: 'create:whisk'
	})
	
	event.remove({id: 'create:crafting/kinetics/basin'})
	event.shaped('create:basin', [
		'N N',
		'ANA'
	], {
		N: 'immersiveengineering:plate_nickel',
		A: 'create:andesite_alloy'
	})
	
	event.remove({id: 'immersiveengineering:crafting/blastbrick'})
	event.recipes.createMixing('3x immersiveengineering:blastbrick', [
	'#forge:dusts/redstone',
	'#forge:dusts/redstone',
	'#forge:dusts/redstone',
	'#forge:dusts/redstone',
	'#forge:ingots/brick',
	'#forge:ingots/brick',
	'#forge:ingots/brick',
	'#forge:ingots/brick',
	Fluid.of('minecraft:lava', 250)
	])
	
	event.remove({id: 'immersiveengineering:crafting/component_steel'})
	event.shaped('immersiveengineering:component_steel', [
		'S S',
		' L ',
		'S S'
	], {
		S: 'immersiveengineering:plate_steel',
		L: '#forge:ingots/silver'
	})
	
	event.remove({id: 'immersiveengineering:crafting/component_iron'})
	event.shaped('immersiveengineering:component_iron', [
		'S S',
		' L ',
		'S S'
	], {
		S: '#forge:plates/iron',
		L: 'immersiveengineering:ingot_lead'
	})
	
	event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'})
	event.shaped('create:empty_blaze_burner', [
		'FFF',
		'SSS'
	], {
		S: 'immersiveengineering:steel_scaffolding_standard',
		F: 'immersiveengineering:alu_fence'
	})
	
	event.remove({id: 'create:crafting/materials/brass_casing'})
	event.shaped('create:brass_casing', [
		'WWW',
		'BSB',
		'WWW'
	], {
		S: 'immersiveengineering:steel_scaffolding_standard',
		W: '#forge:treated_wood',
		B: 'create:brass_sheet'
	})
	
	event.shaped('kubejs:brass_machine', [
		'PEP',
		'WBW',
		'PSP'
	], {
		E: 'create:electron_tube',
		S: 'immersiveengineering:plate_steel',
		W: 'create:cogwheel',
		B: 'create:brass_casing',
		P: '#gars:plates/leadsilver'
	})
	
	event.remove({id: 'create:crafting/kinetics/deployer'})
	event.shaped('create:mechanical_mixer', [
		' MH',
		' W '
	], {
		H: Item.of('immersiveengineering:hammer').ignoreNBT(),
		M: 'kubejs:brass_machine',
		H: 'create:brass_hand'
	})
	
	event.remove({id: 'create:crafting/kinetics/deployer'})
	event.shaped('create:mechanical_mixer', [
		' MH',
		' C '
	], {
		H: Item.of('immersiveengineering:hammer').ignoreNBT(),
		M: 'kubejs:brass_machine',
		C: 'minecraft:crafting_table'
	})
	
	event.remove({id: 'create:crafting/kinetics/deployer'})
	event.shaped('create:mechanical_mixer', [
		' MH',
		' C '
	], {
		H: Item.of('immersiveengineering:hammer').ignoreNBT(),
		M: 'kubejs:brass_machine',
		C: 'minecraft:crafting_table'
	})
	
	// Create ImmersiveEng Compat
	
	// GENERIC
	
	event.remove({id: 'minecraft:composter'})
	event.shaped('minecraft:composter', [
		'S S',
		'S S',
		'SPS'
	], {
		S: '#minecraft:wooden_slabs',
		P: '#minecraft:planks'
	})
	
	event.shapeless('minecraft:flint', [ 'minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'])
	
	event.smelting('minecraft:glass', 'byg:quartzite_sand')
	
	event.remove({id: 'minecraft:mushroom_stew'})
	event.shapeless('minecraft:mushroom_stew', [ 'minecraft:bowl', '#forge:mushrooms', '#forge:mushrooms'])
	
	event.shapeless('minecraft:raw_iron', ['minecraft:quartz', 'silentgear:raw_crimson_iron'])
	
	// Create Compat
	
	event.recipes.createCrushing([
		Item.of('silentgear:raw_crimson_iron').withChance(0.25)
	], 'minecraft:blackstone')

})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
	
	event.get('gars:plates/leadsilver').add('#forge:plates/silver')
	event.get('gars:plates/leadsilver').add('#forge:plates/lead')
})